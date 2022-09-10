import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Routes, Route } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import AnswerList from './components/AnswerList';
import AnswerDetail from './components/AnswerDetail';
import NewAnswerForm from './components/NewAnswerForm';
import EditQuestionForm from './components/EditQuestionForm';
import EditAnswerForm from './components/EditAnswerForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/newquestion" element={<NewQuestionForm />} />
        <Route path="/editquestion/:id" element={<EditQuestionForm />} />
        <Route path="/newanswer" element={<NewAnswerForm />} />
        <Route path="/editanswer/:id" element={<EditAnswerForm />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/answers/:id" element={<AnswerDetail />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
