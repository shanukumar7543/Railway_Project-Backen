import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Train from "../Train/Train";
import Station from "../Station/Station";
import Add_Train from "../Addtrain/Addtrain";
import Dashboard from "../Dashboard/Dashboard";
import Updatestation from "../UpdateStation/Updatestation";
import Fare from "../Fare/Fare";
import AddSeat from "../AddSeat/AddSeat";
import Trainshedule from "../TrainShedule/Trainshedule";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Add_Station from "../AddStation/Addstation";
import Feedback from "../Feedback/Feedback";
import Login from "../Login/Login";
// import Home from '../Home/Home'

function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <div style={{ hight: "700px", width: "1300px", padding: "25px" }}>
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
