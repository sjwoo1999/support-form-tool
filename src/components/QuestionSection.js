// src/components/QuestionSection.js
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
    <div className="question-section">
      <h2 className="question-title">
        <span className="question-number">{question.match(/\[(\d+번 문항)\]/)[1].charAt(0)}</span>
        {question}
      </h2>
      <div className="textarea-container">
        <textarea
          value={answer}
          onChange={handleChange}
          className="textarea"
          rows={6}
          placeholder="여기에 답변을 작성하세요."
        />
        <div className="char-count">
          <span className={isOverLimit ? 'char-count exceeded' : 'char-count'}>
            글자 수: {charCount} / {charLimit}
          </span>
          {isOverLimit && (
            <span className="char-limit-warning">글자 수 제한을 초과했습니다!</span>
          )}
        </div>
      </div>
      <button onClick={handleSave} className="save-button">
        저장
      </button>
    </div>
  );
}