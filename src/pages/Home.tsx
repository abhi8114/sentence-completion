import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <button
        onClick={() => navigate('/intro')}
        className="flex items-center gap-2 text-xl md:text-3xl font-semibold hover:underline hover:opacity-90 transition px-4 py-2"
        aria-label="Go to sentence construction"
      >
        Sentence Construction
        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default Home;