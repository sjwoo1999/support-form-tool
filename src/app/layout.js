'use client';

import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gradient-to-b from-ku-crimson to-gray-100 font-['Noto_Sans_KR']">
        {children}
      </body>
    </html>
  );
}