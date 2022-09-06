import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Routes, Route } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/newquestion" element={<NewQuestionForm />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
