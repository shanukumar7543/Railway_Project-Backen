import React, { useState } from 'react';
import './Sidebar.css'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ShopIcon from '@mui/icons-material/Shop';  
import DensitySmallRoundedIcon from '@mui/icons-material/DensitySmallRounded';
import DirectionsSubwayFilledRoundedIcon from '@mui/icons-material/DirectionsSubwayFilledRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


import {
    // FaTh,
    // FaBars,
    FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
    // FaShoppingBag,
    // FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
         // {
        //     path:"/dashboard",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        // {
        //     path:"/about",
        //     name:"About",
        //     icon:<FaUserAlt/>
        // },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // },
        // {
        //     path:"/Shop",
        //     name:"Shop",
        //     icon:<ShopIcon/>
        // },
        // {
        //     path:"/view",
        //     name:"View",
        //     // icon:<FaThList/>
        // },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<VerifiedUserIcon/>
        },
        // {
        //     path:"/bank",
        //     name:"Bank",
        //     // icon:<FaThList/>
        // },
        {
            path:"/station",
            name:"Station",
            icon:<AccountBalanceIcon/>
        },
        {
            path:"/addstation",
            name:"Addstation",
            icon:<InventoryIcon/>
        },
        {
            path:"/train",
            name:"Train",
            icon:<DirectionsSubwayFilledRoundedIcon/>
        },
        {
            path:"/addtrain",
            name:"Addtrain",
            icon:<DirectionsSubwayFilledRoundedIcon/>
        },
        {
            path:"/addseat",
            name:"Addseat",
            icon:<CategoryIcon/>
        },
        {
            path:"/addboggy",
            name:"Add_boggy",
            icon:<CategoryIcon/>
        },
        {
            path:"/trainshedule",
            name:"Train_Shedule",
            icon:<CategoryIcon/>
        },
        {
          path:"/fare",
          name:"Fare",
          icon:<RequestPageIcon/>
      },
        {
          path:"/feedback",
          name:"Feedback",
          icon:<FeedbackRoundedIcon/>
      },
        {
            path:"/login",
            name:"Logout",
            icon:<ExitToAppRoundedIcon/>
        },
        // {
        //     path:"/fare",
        //     name:"Fare",
        //     icon:<RequestPageIcon/>
        // },
        // {
        //     path:"/Product_update",
        //     name:"Product_Update",
        //     // icon:<FaThList/>
        // },
        // {
        //     path:"/Product_delete",
        //     name:"Product_Delete",
        //     // icon:<FaThList/>
        // }
        
    ]
    return (
        <div >
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <DensitySmallRoundedIcon onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{
                            display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};



export default Sidebar;














// import React from 'react';
// import './Sidebar.css';
// import { Link } from 'react-router-dom';


// function Sidebar() {
//   return (
//     <div className='sidebar'>
//       <div >
//         <ul>
//           <li className='list'><Link to="/dashboard">Dashboard</Link></li>

//           <li className='list'><Link to="/station">Station</Link></li>
//            <ul>
//              <li><Link to="/addstation">Add Station</Link></li>
//              {/* <li><Link to="/updatestation">Update Station</Link></li> */}
//            </ul>
//           <li className='list'><Link to="/train">Train</Link></li>
//             <ul>
//              <li><Link to="/addtrain">Add Train</Link></li>
//              <li><Link to="/addseat">Add_Seat</Link></li>
//              <li><Link to="/addboggy">Add_Boggy</Link></li>
//              <li><Link to="/trainshedule">Train_Shedule</Link></li>
//              <li><Link to="/fare">Fare</Link></li>
//             </ul>

//           <li className='list'><Link to="/feedback">Feedback</Link></li>
//           <li className='logout'><Link to="/login">Logout</Link></li>
     
        
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Sidebar;
