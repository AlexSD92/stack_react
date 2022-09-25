import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuestionList from './components/questions/QuestionList';
import ProfileList from './components/profiles/ProfileList';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import './api/axiosDefaults';
import NavBar from './components/NavBar';
import About from './components/About';
import PageNotFound from './components/messages/PageNotFound';
import { useCurrentUser } from './contexts/CurrentUserContext';
import MyProfile from './components/profiles/MyProfile';
import QuestionEditOrDetail from './components/questions/QuestionEditOrDetail';
import ProfileEditOrDetail from './components/profiles/ProfileEditOrDetail';
import EditQuestionForm from './components/questions/EditQuestionForm';
import EditAnswerForm from './components/answers/EditAnswerForm';
import DeleteQuestion from './components/questions/DeleteQuestion';
import AnswerDetail from './components/answers/AnswerDetail';
import DeleteAnswer from './components/answers/DeleteAnswer';


function App() {
  const currentUser = useCurrentUser();

  const logInURLs = (
    <>
      <Route path="/questions" element={<QuestionList />} />
      <Route path="/questions/:id" element={<QuestionEditOrDetail />} />
      <Route path="/questions/:id/edit" element={<EditQuestionForm />} />
      <Route path="/questions/:id/delete" element={<DeleteQuestion />} />
      <Route path="/answers/:id" element={<AnswerDetail />} />
      <Route path="/answers/:question_id/:id/edit" element={<EditAnswerForm />} />
      <Route path="/answers/:question_id/:id/delete" element={<DeleteAnswer />} />
      <Route path="/profiles" element={<ProfileList />} />
      <Route path="/profiles/:id" element={<ProfileEditOrDetail />} />
      <Route path="/myprofile" element={!currentUser ? <Navigate to='/login' /> : <MyProfile />} />
    </>
  )
  
  const logOutURLs = (
    <>
      <Route path="/" element={<About />} />
      <Route path="/register" element={currentUser ? <Navigate to='/' /> : <Register />} />
      <Route path="/login" element={currentUser ? <Navigate to='/' /> : <Login />} />
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
