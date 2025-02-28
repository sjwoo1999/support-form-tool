module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'ku-crimson': '#790030', // 예: 고려대 크림슨 색상
        },
        fontFamily: {
          'Noto_Sans_KR': ['"Noto Sans KR"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };