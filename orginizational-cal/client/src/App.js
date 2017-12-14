import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Email from "./components/ItemComponents/Email";
import Reminder from "./components/ItemComponents/Reminder";
import CalendarMonth from "./components/CalendarMonth";


const App = () =>
  <Router>
    <div>
      <Nav />
      <div className="container">
		  <div className="row">
		    <div className="col-sm-4">
		      	<Email />
		      	<Reminder />
		    </div>
		    <div className="col-sm-8">
		      	<CalendarMonth />
		    </div>
		  </div>
		</div>
    </div>
  </Router>;

export default App;

  