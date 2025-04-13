import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Optional icon from lucide

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <button
        onClick={() => navigate('/intro')}
        className="flex items-center gap-2 text-3xl font-semibold hover:underline hover:opacity-90 transition"
      >
        <span className="flex items-center justify-center relative">
         
            <span className="text-white mx-1"></span>
 
        </span>
        Sentence Construction
        <ArrowRight size={32} />
      </button>
    </div>
  );
};

export default Home;
