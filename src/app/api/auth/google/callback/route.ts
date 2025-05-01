// app/api/auth/google/callback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { googleLoginCallback } from '../../../../../app/login/action';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  const result = await googleLoginCallback(null, searchParams);

  if (result?.errors) {
    return NextResponse.redirect(new URL('/signup?error=google_failed', req.url));
  }

  return NextResponse.redirect(new URL('/dashboard', req.url));
}
