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
import AnswerEditOrDetail from './components/answers/AnswerEditOrDetail';
import ProfileEditOrDetail from './components/profiles/ProfileEditOrDetail';


function App() {
  const currentUser = useCurrentUser();

  const logInURLs = (
    <>
      <Route path="/questions" element={<QuestionList />} />
      <Route path="/questions/:id" element={<QuestionEditOrDetail />} />
      <Route path="/answers/:id" element={<AnswerEditOrDetail />} />
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
