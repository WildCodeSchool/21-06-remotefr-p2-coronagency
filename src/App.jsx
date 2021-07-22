import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Graph from "./components/Graph";
import Quiz from "./components/Quiz";
import Darkmod from "./components/Darkmod";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Map from "./pages/Map"
import "./Style/general.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Info}/>
        <Route path="/graphiques" component={Graph}/>
        <Route path="/centres" component={Map}/>
        <Route path="/quizz" component={Quiz}/>
      </Switch>
    </div>
  );
}

export default App;
