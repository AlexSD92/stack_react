import './App.css';
import NewQuestionForm from './components/NewQuestionForm';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/newquestion" render={() => <NewQuestionForm />} />
      </Switch>
    </div>
  );
}

export default App;
