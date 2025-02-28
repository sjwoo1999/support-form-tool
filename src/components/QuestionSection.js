'use client';

import { useState } from 'react';

export default function QuestionSection({ question, charLimit }) {
  const [answer, setAnswer] = useState('');
  const charCount = answer.length;
  const isOverLimit = charCount > charLimit;

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem(question, answer);
    alert('저장 완료');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-ku-crimson/20">
      <h2 className="text-xl font-semibold text-ku-crimson mb-4 flex items-center">
        <span className="inline-block w-6 h-6 bg-ku-crimson text-white rounded-full text-center mr-2">
          {question.match(/\[(\d+번 문항)\]/)[1].charAt(0)}
        </span>
        {question}
      </h2>
      <div className="relative">
        <textarea
          value={answer}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-ku-crimson focus:border-ku-crimson transition duration-300 bg-gray-50"
          rows={6}
          placeholder="여기에 답변을 작성하세요."
        />
        <div className="absolute bottom-2 right-2 text-sm font-medium">
          <span className={isOverLimit ? 'text-red-600' : 'text-ku-crimson'}>
            글자 수: {charCount} / {charLimit}
          </span>
          {isOverLimit && (
            <span className="ml-2 text-red-600">글자 수 제한을 초과했습니다!</span>
          )}
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-ku-crimson text-white rounded-md hover:bg-ku-crimson/80 transition duration-200"
      >
        저장
      </button>
    </div>
  );
}