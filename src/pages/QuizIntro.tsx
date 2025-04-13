import { useNavigate } from 'react-router-dom';
import Vector from '../assets/Vector.svg';
const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="    w-full max-w-[620px] text-center ">
        <div className=" mb-4">
          <img src={Vector} alt="Logo" className="mx-auto h-12 w-auto" />
        </div>
        <h2  className="text-[40px] mt-10 mb-2">Sentence Construction</h2>
        <p className="text-[#7C8181] text-[20px] leading-[28px] tracking-[-0.01em] mb-3 ">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        <div className="grid grid-cols-3 text-sm text-[#2A2D2D] mb-6  mt-[76px]">
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-xl mb-4">Time Per Question</h3>
            <h3 className="text-gray-600">30 sec</h3>
          </div>
          <div className="flex flex-col items-center border-l border-r border-gray-300">
            <h3 className="font-medium text-xl mb-4">Total Questions</h3>
            <h3 className="text-gray-600">10</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-xl mb-4">Coins</h3>
            <h3 className="text-yellow-500 font-bold">0</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={() => navigate('/')}
            className="px-12 py-2 border rounded-md bg-white text-blue-600 hover:bg-blue-50 transition"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="px-12 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;
