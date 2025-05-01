import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

type SessionPayload = {
  userId: number;
  userName: string;
  userEmail: string;
  expiresAt: Date;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS512" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS512"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(
  userId: number,
  userName: string,
  userEmail: string
) {
  const cookiesStore = await cookies();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({
    userId,
    userName,
    userEmail,
    expiresAt,
  });

  cookiesStore.set("session", session, {
    httpOnly: false, // ✅ Now middleware can read it
    secure: true,
    expires: expiresAt,
    path: "/", // Ensures visibility across the app
    sameSite: "lax",
  });
}

export async function verifySession() {
  const cookiesStore = await cookies();
  const cookie = cookiesStore.get("session")?.value;
  const session = await decrypt(cookie);
  if (!session?.userId) {
    return null;
  }

  return { userId: session.userId };
}

export async function deleteSession() {
  const cookiesStore = await cookies();
  cookiesStore.delete("session");
}
