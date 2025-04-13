import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizIntro from './pages/QuizIntro';
import QuizPage from './pages/QuizPage';
import './App.css';
import ResultPage from './pages/ResultPage';
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/600.css"; // SemiBold
import "@fontsource/inter/700.css"; // Bold


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<QuizIntro />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
