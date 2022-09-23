import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  } as any);

  const url = req.nextUrl.clone();

  if (url.pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && url.pathname !== "/login") {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};
