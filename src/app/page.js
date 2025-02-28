import QuestionSection from '../components/QuestionSection';

export default function Home() {
  const questions = [
    { text: '[1번 문항] 자기소개 및 KUCC에 지원하게 된 동기를 작성해주세요.', limit: 400 },
    { text: '[2번 문항] 컴퓨터 분야와 관련된 학습 경험 혹은 인상 깊었던 경험을 알려주세요.', limit: 500 },
    { text: '[3번 문항] 단체 활동에서 지원자가 수행한 역할에 대하여 소개해주세요.', limit: 500 },
    { text: '[4번 문항] KUCC에서 도움을 받고 싶은 부분이나 본인이 다른 부원들에게 도움을 줄 수 있는 부분에 대해 작성해주세요.', limit: 400 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-4 my-12 p-8 bg-white rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-ku-crimson mb-8 text-center tracking-tight">
          KUCC 지원서 작성 도구
        </h1>
        <p className="mb-10 text-gray-700 text-center font-medium">
          아래 질문에 답변을 작성하며, 실시간으로 글자 수를 확인하세요.
        </p>
        <div className="space-y-8">
          {questions.map((q, index) => (
            <QuestionSection key={index} question={q.text} charLimit={q.limit} />
          ))}
        </div>
      </div>
    </div>
  );
}