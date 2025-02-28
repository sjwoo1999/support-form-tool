// src/components/QuestionSection.js
'use client';

import { useState } from 'react';

export default function QuestionSection({ question, charLimit }) {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSave = () => {
    if (!answer.trim()) {
      alert('답변을 입력해주세요.');
      return;
    }
    localStorage.setItem(question, answer);
    alert('답변이 저장되었습니다.');
  };

  return (
    <div className="question-section">
      <h2 className="question-title">{question}</h2>
      <textarea
        value={answer}
        onChange={handleChange}
        className="textarea"
        placeholder="여기에 답변을 작성하세요. (필수 입력)"
        rows={6}
        required
      />
      <div className="char-count">
        글자 수: {answer.length} / {charLimit}
      </div>
      <button
        onClick={handleSave}
        className="save-button"
        disabled={!answer.trim()}
      >
        저장
      </button>
    </div>
  );
}