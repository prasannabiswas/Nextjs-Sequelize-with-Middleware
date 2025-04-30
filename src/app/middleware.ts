import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/utils/session";

const protectedRoutes = ["/dashboard", "/"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = req.cookies.get("session")?.value;
  let session = null;

  if (cookie) {
    try {
      session = await decrypt(cookie);
    } catch (error) {
      console.error("Failed to decrypt session cookie:", error);
    }
  }

  if (isProtectedRoute && !session?.userId) {
    console.log("not authenticated redirecting...");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    console.log("authentication successful.");
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
