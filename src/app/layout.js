export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="/styles/custom.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}