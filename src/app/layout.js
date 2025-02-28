// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/custom.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}