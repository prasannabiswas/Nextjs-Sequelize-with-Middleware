// app/api/auth/google/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID!;
  const redirectUri = encodeURIComponent("http://localhost:3000/api/auth/google/callback");
  const scope = encodeURIComponent("openid email profile");

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  return NextResponse.redirect(googleUrl);
}
