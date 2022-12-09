import logo from './logo.svg'
import './App.css'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Train from './Train/Train'
import Station from './Station/Station'
import Addtrain from './Addtrain/Addtrain'
import Addstation from './AddStation/Addstation'
import Feedback from './Feedback/Feedback'
import Updatestation from './UpdateStation/Updatestation'
import Fare from './Fare/Fare'
import AddSeat from './AddSeat/AddSeat'
import Trainshedule from './TrainShedule/Trainshedule'
import Chart from './Chart/Chart'
import Login from './Login/Login'
import Register from './Register/Register'
// import Userinfo from './Userinfo/Userinfo'
import Logout from './Logout/Logout'
import Userinfo from './Userinfo/Userinfo'

function App() {
  return (
    <>
    {/* <Userinfo/> */}
    {/* <Login/> */}
      <div style={{ hight: '700px', padding: 'px' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/train" element={<Train />} />
          <Route path="/station" element={<Station />} />
          <Route path="/addstation" element={<Addstation />} />
          <Route path="/addtrain" element={<Addtrain />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/updatestation" element={<Updatestation />} />
          <Route path="/fare" element={<Fare />} />
          <Route path="/addseat" element={<AddSeat />} />
          <Route path="/trainshedule" element={<Trainshedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myprofile" element={<Userinfo />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
