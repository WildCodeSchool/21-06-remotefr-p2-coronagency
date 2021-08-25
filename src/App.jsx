import Info from "./components/Info";
import Chartjs from "./pages/Chartjs";
import Quiz from "./pages/quiz/Quiz";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Map from "./pages/Map"
import "./Style/general.css";

function App() {
  return (
    <div className="App">
              

      <Switch>
        <Route exact path="/" component={Info}/>
        <Route path="/graphiques" component={Chartjs}/>
        <Route path="/centres" component={Map}/>
        <Route path="/quizz" component={Quiz}/>
      </Switch>
    </div>
  );
}

export default App;
