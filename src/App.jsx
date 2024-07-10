import "./App.css";
import React from "react";
import { BeeComponents, Contacts, Header, Hero } from "./libs";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

export const App = () => {
  return (

    <Router>
      <Header/>
      <Routes>

        <Route path="/" exact Component={Hero}/>
        <Route path="/components" Component={BeeComponents}/>
        <Route path="/contact" Component={Contacts}/>
     
      </Routes>
    </Router>
  );
};
