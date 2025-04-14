import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Question {
  questionId: string;
  question: string;
  correctAnswer: string[];
  options: string[];
}

interface LocationState {
  questions: Question[];
  userAnswers: string[][];
  score: number;
}

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  if (!state) {
    return (
      <div className="text-center p-10">
        <p className="text-lg font-medium">No results to display.</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    );
  }

  const { questions, userAnswers, score } = state;
  const percentage = Math.round((score / questions.length) * 100);

  const fillBlanks = (sentence: string, words: string[]) => {
    let index = 0;
    return sentence.replace(/_{3,}/g, () => {
      return words[index++] || '____';
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Circular Score Card */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 mb-4">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}`}
            styles={buildStyles({
              pathColor: percentage >= 50 ? '#22c55e' : '#ef4444',
              textColor: percentage >= 50 ? '#22c55e' : '#ef4444',
              trailColor: '#e5e7eb',
              textSize: '28px',
              pathTransitionDuration: 0.5,
            })}
          />
        </div>
        <p className="text-xl font-semibold">Overall Score</p>
        <p className="text-gray-600">
          You got {score} out of {questions.length} correct.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Keep practicing to improve your performance.
        </p>
        <button
          className="mt-20 px-5 py-2 bg-white text-[#453FE1] rounded border border-[#453FE1]"
          onClick={() => navigate('/')}
        >
          Go to Dashboard
        </button>
      </div>

      {/* Question-wise Feedback */}
      <div className="space-y-[120px]">
        {questions.map((q, idx) => {
          const isCorrect =
            JSON.stringify(userAnswers[idx]) ===
            JSON.stringify(q.correctAnswer);

          const correctSentence = fillBlanks(q.question, q.correctAnswer);
          const userSentence = fillBlanks(q.question, userAnswers[idx]);

          return (
            <div
              key={q.questionId}
              className="bg-white rounded-lg shadow-md p-4 "
            >
              <span className='bg-[#F0F0F0]'> <p className="text-sm text-[#616464] mb-1">Prompt</p></span>
              
              <p className="text-gray-900 font-medium">{correctSentence}</p>

              <div className="mt-3 bg-gray-50 rounded-md p-3">
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Your response:{' '}
                  <span
                    className={`${
                      isCorrect ? 'text-green-600' : 'text-red-600'
                    } font-semibold ml-1`}
                  >
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </p>
                <p className="text-gray-800">{userSentence}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
