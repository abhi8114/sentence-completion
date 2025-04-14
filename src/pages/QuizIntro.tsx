import { useNavigate } from 'react-router-dom';
import Vector from '../assets/Vector.svg';

const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-[620px] text-center">
        <div className="mb-6">
          <img 
            src={Vector} 
            alt="Logo" 
            className="mx-auto h-10 md:h-12 w-auto" 
          />
        </div>
        
        <h2 className="text-3xl md:text-[40px] mt-6 md:mt-10 mb-3 font-semibold">
          Sentence Construction
        </h2>
        
        <p className="text-gray-600 text-base md:text-xl leading-normal md:leading-[28px] mb-6 max-w-[540px] mx-auto">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-800 my-8 md:my-12">
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg md:text-xl mb-2 md:mb-4">Time Per Question</h3>
            <p className="text-gray-500">30 sec</p>
          </div>
          <div className="flex flex-col items-center border-l border-r border-gray-200">
            <h3 className="font-medium text-lg md:text-xl mb-2 md:mb-4">Total Questions</h3>
            <p className="text-gray-500">10</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-lg md:text-xl mb-2 md:mb-4">Coins</h3>
            <p className="text-yellow-500 font-semibold">0</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 md:mt-16">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-8 py-2 border rounded-md bg-white text-blue-600 hover:bg-blue-50 transition font-medium"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="w-full sm:w-auto px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;