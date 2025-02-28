import { Noto_Sans_KR } from 'next/font/google';
import '../app/globals.css';

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased bg-gradient-to-b from-ku-crimson to-gray-100`}>
        {children}
      </body>
    </html>
  );
}