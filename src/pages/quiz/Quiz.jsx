import React from "react";
import {Route, Switch} from "react-router-dom";
import QuizHeader from "./QuizHeader";
import QuizLanding from "./QuizLanding";
import QuizFooter from "./QuizFooter";
import Welcome from "./Welcome/index";
import Login from "./Login/index";
import Signup from "./Signup/Signup";
import ErrorPage from "./ErrorPage/index";
import './Quiz.css';

function Quiz() {
  return (
    <div className="bodyQuiz">

      <QuizHeader/>

    <Switch>
      <Route exact path="/quizz" component={QuizLanding}/>
      <Route exact path="/quizz/welcome" component={Welcome}/>
      <Route exact path="/quizz/login" component={Login}/>
      <Route exact path="/quizz/signup" component={Signup}/>
      <Route component={ErrorPage}/>
    </Switch>

      <QuizFooter/>
    
    </div>
  );
}

export default Quiz;
