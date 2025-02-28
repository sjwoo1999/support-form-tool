'use client';

import { useState } from 'react';

export default function QuestionSection({ question, charLimit }) {
  const [answer, setAnswer] = useState('');
  const charCount = answer.length;
  const isOverLimit = charCount > charLimit;

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="mb-6 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{question}</h2>
      <textarea
        value={answer}
        onChange={handleChange}
        className="w-full p-2 border rounded resize-y"
        rows={6}
        placeholder="여기에 답변을 작성하세요."
      />
      <div className="flex justify-between mt-2">
        <span className={isOverLimit ? 'text-red-500' : 'text-gray-600'}>
          글자 수: {charCount} / {charLimit}
        </span>
        {isOverLimit && (
          <span className="text-red-500">글자 수 제한을 초과했습니다!</span>
        )}
      </div>
    </div>
  );
}