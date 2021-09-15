import {Switch, Route} from "react-router-dom";
import Info from "./components/Info";
import Chartjs from "./pages/Chartjs";
import Map from "./pages/Map"
import Quiz from "./pages/quiz/Quiz";
import QuestionContaint from "./pages/quiz/QuestionContaint"
import './Style/general.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Info}/>
        <Route path="/graphiques" component={Chartjs}/>
        <Route path="/centres" component={Map}/>
        <Route path="/quizz" component={Quiz}/>
        <Route path="/quizz/start" component={QuestionContaint}/>
      </Switch>
    </div>
  );
}

export default App;
