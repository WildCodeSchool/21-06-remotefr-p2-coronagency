import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Graph from "./components/Graph";
<<<<<<< HEAD
import Centers from "./components/Centers";
=======
>>>>>>> f96d26d4f07d0f14509b50af47e7c2867130fabe
import Quiz from "./components/Quiz";
import Darkmod from "./components/Darkmod";
import {Switch, Route} from "react-router-dom";
import './App.css';
<<<<<<< HEAD
=======
import Map from "./pages/Map"
>>>>>>> f96d26d4f07d0f14509b50af47e7c2867130fabe
import "./Style/general.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Info}/>
        <Route path="/graphiques" component={Graph}/>
<<<<<<< HEAD
        <Route path="/centres" component={Centers}/>
=======
        <Route path="/centres" component={Map}/>
>>>>>>> f96d26d4f07d0f14509b50af47e7c2867130fabe
        <Route path="/quizz" component={Quiz}/>
      </Switch>
    </div>
  );
}

export default App;
