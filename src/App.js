import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Routes, Route, useNavigate } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
// import AnswerList from './components/AnswerList';
import AnswerDetail from './components/AnswerDetail';
import NewAnswerForm from './components/NewAnswerForm';
import EditQuestionForm from './components/EditQuestionForm';
import EditAnswerForm from './components/EditAnswerForm';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';
import Register from './components/Register';
import Login from './components/Login';
import Test from './components/Test';
import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosReq, axiosRes } from './api/axiosDefaults';


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();


function App() {
  const[currentUser, setCurrentUser] = useState(null)
  const history = useNavigate()

  const handleMount = async () => {
    try {
      const {data} = await axiosRes.get('https://stack-drf-api.herokuapp.com/dj-rest-auth/user/');
      setCurrentUser(data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        try {
          await axios.post('https://stack-drf-api.herokuapp.com/dj-rest-auth/token/refresh/');
        } catch (err) {
          setCurrentUser((prevCurrentUser) => {
            if (prevCurrentUser) {
              history('/login');
            }
            return null;
          });
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    )

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401){
          try{
            await axios.post('https://stack-drf-api.herokuapp.com/dj-rest-auth/token/refresh/')
          } catch(err){
            setCurrentUser(prevCurrentUser => {
              if (prevCurrentUser){
                history('/login')
              }
              return null
            })
          }
          return axios(err.config)
        }
        return Promise.reject(err)
      }
    )
  }, [history])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className="App">
          <Routes>
            <Route path="/newquestion" element={<NewQuestionForm currentUser={currentUser} />} />
            <Route path="/editquestion/:id" element={<EditQuestionForm />} />
            <Route path="/newanswer" element={<NewAnswerForm />} />
            <Route path="/editanswer/:id" element={<EditAnswerForm />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/questions/:id" element={<QuestionDetail />} />
            <Route path="/answers/:id" element={<AnswerDetail />} />
            <Route path="/profiles" element={<ProfileList />} />
            <Route path="/profiles/:id" element={<ProfileDetail />} />
            {/* <Route path="/profiles/:id" /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route />
          </Routes>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
