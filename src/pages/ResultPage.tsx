import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Question {
  questionId: string;
  question: string; // sentence with blanks
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

  // Utility to fill blanks with given words (correct/user)
  const fillBlanks = (sentenceWithBlanks: string, words: string[]) => {
    let filled = sentenceWithBlanks;
    let i = 0;
    filled = filled.replace(/_{3,}/g, () => {
      const word = words[i] || '';
      i++;
      return word;
    });
    return filled;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Score Summary */}
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-500 flex items-center justify-center text-2xl font-bold text-green-600">
          {Math.round((score / questions.length) * 100)}
        </div>
        <p className="text-lg font-semibold mt-2">Overall Score</p>
        <p className="text-gray-600 mt-1">
          You scored {score} out of {questions.length}.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Review your responses below to see where you can improve.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate('/')}
        >
          Go to Dashboard
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {questions.map((question, index) => {
          const isCorrect =
            JSON.stringify(userAnswers[index]) ===
            JSON.stringify(question.correctAnswer);
          const filledCorrectSentence = fillBlanks(question.question, question.correctAnswer);
          const filledUserSentence = fillBlanks(question.question, userAnswers[index]);

          return (
            <div
              key={question.questionId}
              className="border rounded-lg shadow-sm p-4 bg-white"
            >
              <p className="text-gray-600 text-sm font-medium mb-1">Prompt</p>
              <p className="text-gray-900">{filledCorrectSentence}</p>

              <div className="mt-3 p-3 rounded-md bg-gray-50">
                <p className="text-sm text-gray-500 font-medium mb-1">
                  Your response{' '}
                  <span
                    className={`ml-2 font-semibold ${
                      isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </p>
                <p className="text-gray-800">{filledUserSentence}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
