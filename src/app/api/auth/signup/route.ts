// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getModels } from "@/lib/connection/connection";
import { hashPassword } from "@/utils/password";

export const runtime = "nodejs"; // for bcrypt/Sequelize compatibility

export async function POST(req: NextRequest) {
  try {
    // Parse JSON safely
    const body = (await req.json().catch(() => null)) as {
      name?: unknown;
      email?: unknown;
      password?: unknown;
    } | null;

    const name = typeof body?.name === "string" ? body.name : "";
    const email = typeof body?.email === "string" ? body.email : "";
    const password = typeof body?.password === "string" ? body.password : "";

    // Basic validation (aligns with your action's expectations)
    if (!name || !email || !password || password.length < 8) {
      return NextResponse.json(
        { error: "Invalid signup data" },
        { status: 400 }
      );
    }

    const models = await getModels();

    // Check if user already exists (same behavior as your action)
    const existing = await models.users.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 409 }
      );
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);

    await models.users.create({
      name,
      email,
      password: hashedPassword,
    });

    // Same outcome as your action (which redirects to /login):
    // here we return success; let the client redirect to /login.
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (e) {
    console.error("[signup] unexpected error:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
