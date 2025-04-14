import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://json-server-abhi.onrender.com/data')
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions));
  }, []);

  useEffect(() => {
    const totalTime = 30;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleNext();
          return totalTime;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, questions]);

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word) || selectedWords.length >= 4) return;
    setSelectedWords([...selectedWords, word]);
  };

  const handleBlankClick = (index: number) => {
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
  };

  const handleNext = () => {
    if (questions.length === 0) return;

    const currentQ = questions[currentIndex];
    const correct = currentQ.correctAnswer;

    if (JSON.stringify(selectedWords) === JSON.stringify(correct)) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, selectedWords]);
    setSelectedWords([]);
    setTimer(30);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate('/result', {
        state: { questions, userAnswers: [...userAnswers, selectedWords], score },
      });
    }
  };

  if (!questions.length) return <div className="text-center p-10">Loading...</div>;

  const currentQ = questions[currentIndex];
  const blanks = currentQ.question.split('_____________');

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl h-auto md:h-[600px] rounded-2xl shadow-md px-4 md:px-8 py-6 relative space-y-4 md:space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
          <span>0:{timer < 10 ? `0${timer}` : timer}</span>
          <button className="px-3 py-1 border rounded hover:bg-gray-100 transition text-sm">Quit</button>
        </div>

        {/* Segmented Timer Bar */}
        <div className="flex justify-center gap-1 md:gap-2 mt-4 overflow-x-auto">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 md:w-20 rounded-[10.63px] transition-all duration-300 ${
                index < Math.floor((30 - timer) / 3)
                  ? 'bg-[#F2A531]'
                  : 'bg-[#DFE3E3]'
              }`}
            ></div>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 md:mt-14">
          <p className="text-[#616464] font-bold text-sm md:text-base">
            Select the missing words in the correct order
          </p>
        </div>

        {/* Sentence with blanks */}
        <div className="text-lg md:text-[24px] text-center leading-relaxed md:leading-14 text-gray-800 font-medium mt-8 md:mt-16 px-4 md:px-20">
          {blanks.map((part, i) => (
            <span key={i}>
              {part}
              {i < currentQ.correctAnswer.length && (
                selectedWords[i] ? (
                  <button
                    onClick={() => handleBlankClick(i)}
                    className="inline-block px-2 md:px-4 py-1 md:py-2 mx-1 text-xs md:text-sm leading-6 border-[#BFC6C6] border rounded-lg font-medium"
                  >
                    <p>{selectedWords[i]}</p>
                  </button>
                ) : (
                  <span className="inline-block w-10 md:w-16 border-b-2 border-gray-400 mx-1 align-baseline"></span>
                )
              )}
            </span>
          ))}
        </div>

        {/* Options */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {currentQ.options.map((word) => (
            <button
              key={word}
              onClick={() => handleWordClick(word)}
              disabled={selectedWords.includes(word)}
              className={`px-3 md:px-4 py-1 md:py-2 border-[#BFC6C6] border rounded-lg text-xs md:text-sm font-medium transition ${
                selectedWords.includes(word)
                  ? 'text-[#414343] cursor-not-allowed'
                  : 'hover:bg-gray-50'
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Next Arrow Button */}
        <div className="absolute bottom-0 right-0 mr-4 mb-4 flex justify-end mt-2 md:mt-8">
          <button
            onClick={handleNext}
            disabled={selectedWords.length < currentQ.correctAnswer.length}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md border text-gray-500 hover:bg-gray-100 disabled:opacity-40"
          >
            ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;