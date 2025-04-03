import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/(withAuth)/:path*'],
};

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';

// export const config = {
//   matcher: ['/(withAuth)/:path*'],
// };

// // 개발 환경에서만 인증 체크를 비활성화
// export default function middleware(req) {
//   // 개발 환경에서는 인증 체크를 건너뜁니다
//   if (process.env.NODE_ENV === 'development') {
//     return NextResponse.next();
//   }

//   // 프로덕션 환경에서는 인증 체크를 수행
//   return withAuth(
//     function middleware(req) {
//       return NextResponse.next();
//     },
//     {
//       callbacks: {
//         authorized: ({ token }) => !!token,
//       },
//     },
//   )(req);
// }
