import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Se o acesso vier pelo subdomínio lp na raiz '/', carrega a Landing Page
  if (host.startsWith('lp.') && (pathname === '/' || pathname === '')) {
    return NextResponse.rewrite(new URL('/lp/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
