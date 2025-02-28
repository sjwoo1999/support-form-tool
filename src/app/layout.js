import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-gradient-to-b from-ku-crimson to-gray-100 font-['Noto_Sans_KR']">
        <main>{children}</main>
      </body>
    </html>
  );
}