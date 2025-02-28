'use client';

import { useEffect } from 'react';
import '../app/globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    // 클라이언트에서만 스타일 추가
    document.body.className = ''; // 기존 클래스 초기화
    document.body.classList.add(
      'antialiased',
      'bg-gradient-to-b',
      'from-ku-crimson',
      'to-gray-100',
      'font-["Noto_Sans_KR"]'
    );
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}