import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import AnswerDetail from './components/AnswerDetail';
import EditQuestionForm from './components/EditQuestionForm';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';
import Register from './components/Register';
import Login from './components/Login';
import './api/axiosDefaults';
import NavBar from './components/NavBar';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import { useCurrentUser } from './contexts/CurrentUserContext';
import NewAnswerForm from './components/NewAnswerForm';


function App() {
  const currentUser = useCurrentUser();

  const logInURLs = (
    <>
      <Route path="/newquestion" element={!currentUser ? <Navigate to='/login' /> : <NewQuestionForm />} />
      <Route path="/questions" element={!currentUser ? <Navigate to='/login' /> : <QuestionList />} />
      <Route path="/questions/:id" element={!currentUser ? <Navigate to='/login' /> : <QuestionDetail />} />
      <Route path="/questions/:id/editquestion" element={!currentUser ? <Navigate to='/login' /> : <EditQuestionForm />} />
      <Route path="/questions/:id/newanswer" element={!currentUser ? <Navigate to='/login' /> : <NewAnswerForm />} />
      <Route path="/answers/:id" element={!currentUser ? <Navigate to='/login' /> : <AnswerDetail />} />
      <Route path="/profiles" element={!currentUser ? <Navigate to='/login' /> : <ProfileList />} />
      <Route path="/profiles/:id" element={!currentUser ? <Navigate to='/login' /> : <ProfileDetail />} />
    </>
  )
  
  const logOutURLs = (
    <>
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />    
    </>
  )

   return (
        <div className="App">
          <NavBar />
          <Routes>
            {logInURLs}
            {logOutURLs}
          </Routes>
        </div>
  );
}

export default App;
