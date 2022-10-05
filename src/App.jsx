import React,{Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";


import NavBar from "./NavBar";
import TraineeList from "./TraineeList";
import CourseList from "./CourseList";
import Login from "./Login";
import Dashboard from "./Dashboard";

export class App extends Component{

    render(){
        return(
            <BrowserRouter>
             <NavBar />
             <Routes>
                 <Route path="/" exact element={<Login />} />
                 <Route path="/trainees" exact element={<TraineeList />} />
                 <Route path="/courses" exact element={<CourseList />} />
                 <Route path="/dashboard" exact element={<Dashboard />} />
              </Routes>
            </BrowserRouter>

        );
    }

}