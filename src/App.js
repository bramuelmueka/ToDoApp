import React from 'react';
import './App.css';
import Header from "./components/todo/Header";
import { Footer } from "./components/todo/Footer";
import { TodoApp } from "./components/todo/TodoApp";
import profileImage from './img/pic4.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  

  return ( 
   
    <Router>
      <Header title="ToDo App" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            
            <div class="main">
              <div class="left-main">
            <img src={profileImage} alt="avatar" class="avatar"/>
        </div>
        <div class="right-main">
            <h1 class="intro">Organize your work and life</h1>
            <p class="descript">Capture ideas, organize life, and do something creative everyday.<br/><br/>
            Have focus, from work to play.
            </p>
            
            <Link type="button" class="btn btn-secondary" to="/TodoApp">Add A To-Do</Link>
            
        </div>
            </div>
             
        
            
            )
          }}> 
          </Route>
          <Route  path="/TodoApp">
            <TodoApp />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    
  );
}

export default App;
