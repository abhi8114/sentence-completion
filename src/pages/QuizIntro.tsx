import { useNavigate } from 'react-router-dom';
import Vector from '../assets/Vector.svg';
import coin from '../assets/coin.png';
const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[620px] text-center">
        <div className="mb-4">
          <img src={Vector} alt="Logo" className="mx-auto h-12 w-auto" />
        </div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] mt-10 mb-2 font-semibold">
          Sentence Construction
        </h2>
        <p className="text-[#7C8181] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[-0.01em] mb-3">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 text-sm text-[#2A2D2D] mb-6 mt-10 sm:mt-[76px] gap-6 sm:gap-0">
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg sm:text-xl mb-2 sm:mb-4">Time Per Question</h3>
            <h3 className="text-[#7C8181] text-base">30 sec</h3>
          </div>
          <div className="flex flex-col items-center sm:border-l sm:border-r border-[#DFE3E3]">
            <h3 className="font-medium text-lg sm:text-xl mb-2 sm:mb-4">Total Questions</h3>
            <h3 className="text-[#7C8181] text-base">10</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg sm:text-xl mb-2 sm:mb-4">Coins</h3>
          <div className="flex items-center gap-2">
            <img src={coin} alt="Coin" className="w-4 h-4 " />
            <h3 className="text-[#7C8181] font-bold text-base">0</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-16">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-12 py-2 border rounded-md bg-white text-[#453FE1] hover:bg-blue-50 transition"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="w-full sm:w-auto px-12 py-2 bg-[#453FE1] text-white rounded-md hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;
