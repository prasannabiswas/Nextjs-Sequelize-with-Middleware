// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getModels } from "@/lib/connection/connection";
import { comparePassword } from "@/utils/password";
import { createSession } from "@/utils/session";

export async function POST(req: NextRequest) {
  try {
    // 1) Parse JSON safely
    const { email, password } = await req.json();

    if (!email || !password || password.length < 8) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // 2) DB models
    const models = await getModels();

    // 3) Fetch user (make sure password is included)
    const existing = await models.users.findOne({
      where: { email },
      attributes: ["id", "name", "email", "password"],
    });

    if (!existing?.dataValues?.password || !existing?.dataValues?.name || !existing?.dataValues?.email) {
      console.error("no existing user found");
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 4) Compare password
    const isValid = await comparePassword(
      password,
      existing.dataValues.password
    );

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 5) Create session (must work in route handler)
    await createSession(
      existing.dataValues.id,
      existing.dataValues.name,
      existing.dataValues.email
    );

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[login] unexpected error from catch:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
