import QuestionSection from '../components/QuestionSection';

export default function Home() {
  const questions = [
    {
      text: '[1번 문항] 자기소개 및 KUCC에 지원하게 된 동기를 작성해주세요.',
      limit: 400,
    },
    {
      text: '[2번 문항] 컴퓨터 분야와 관련된 학습 경험 혹은 인상 깊었던 경험을 알려주세요.',
      limit: 500,
    },
    {
      text: '[3번 문항] 단체 활동에서 지원자가 수행한 역할에 대하여 소개해주세요.',
      limit: 500,
    },
    {
      text: '[4번 문항] KUCC에서 도움을 받고 싶은 부분이나 본인이 다른 부원들에게 도움을 줄 수 있는 부분에 대해 작성해주세요.',
      limit: 400,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">지원서 작성 도구</h1>
      <p className="mb-4 text-gray-700">
        아래 질문에 답변을 작성하며, 글자 수를 실시간으로 확인하세요.
      </p>
      {questions.map((q, index) => (
        <QuestionSection key={index} question={q.text} charLimit={q.limit} />
      ))}
    </div>
  );
}