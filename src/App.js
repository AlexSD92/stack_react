import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Route, Switch } from 'react-router-dom';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/newquestion" render={() => <NewQuestionForm />} />
        <Route path="/questions" render={() => <QuestionList />} />
      </Switch>
    </div>
  );
}

export default App;
