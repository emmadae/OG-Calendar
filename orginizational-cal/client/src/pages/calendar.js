import React, {Component} from "react";
import "./calendar.css";

import Nav from "../components/Nav";
import Email from "../components/ItemComponents/Email";
import Reminder from "../components/ItemComponents/Reminder";
import Groupon from "../components/ItemComponents/Groupon";
import Weather from "../components/ItemComponents/Weather";
import Meetup from "../components/ItemComponents/Meetup";
// import CalendarMonth from "../components/CalendarMonth";
// import CalendarDay from "../components/CalendarDay";

import CalendarMonth from "../components/CalendarMonth/CalendarMonth.js";

class calendar extends Component {
  state = {
    time: "John Doe",
    name: "John Doe",
    weather: "Sunny",
    email: "johndoe@gmail.com",
    show:"show",
    hide:"hide",
    reminders: ["wake up", "gyme", "lunch", "meal prep"]
  };


componentDidMount(){
  console.log("you worked!");
  console.log(this.state.time);
  console.log("here 88");
    fetch('/auth/session', {credentials: 'same-origin'}).then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log(err);
    });
};



render(){
  return(
    <div data-aos="fade-down">
      <Nav
        name={this.state.name}
      />

      <div className="container">
		   <div className="row main-div">
		    <div className="col-sm-4" data-aos="fade-right">
		      	<Email
              email ={this.state.email}
              show = {this.state.show}
              hide = {this.state.hide}
            />
		      	<Reminder
              reminderList = {this.state.reminders}
            />
		      	<Groupon />
		      	<Weather />
            <Meetup />
		    </div>
		    <div className="col-sm-8" data-aos="fade-left">
		    	<CalendarMonth />
		    </div>
		   </div>
		  </div>
    </div>
  );
}
}
export default calendar;
