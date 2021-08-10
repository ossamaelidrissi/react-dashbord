import React , {useState} from 'react'
import './Style/App.scss';
import TopBar from '../Components/TopBar/TopBar'; 
import SideBar from '../Components/SideBar/SideBar';
import Home from '../Pages/Home/Home';
import Members from '../Pages/Members/Members';
import {BrowserRouter as Router,Route , Switch , useHistory , Redirect} from 'react-router-dom';
import Member from '../Pages/Edit-Member/edit_member';
import Add_Member from '../Pages/Add-Member/Add-member';
import Meeting from '../Pages/Meeting/Meeting';
import Doctors from '../Pages/Doctors/Doctors';
import Edit_Doctors from '../Pages/Edit-Doctor/Edit-Doctors';
import Add_Doctor from '../Pages/Add-Doctors/Add-Doctor';
import Messages from '../Pages/Messages/Messages';
import Cookies from 'universal-cookie';



function App() {
  
  const cookies = new Cookies();
  const History = useHistory();

  // if (cookies.get('login')){  
    return (
      <Router>
        <div className="App">
            <TopBar />
            <div className="container">
              <SideBar />
              <div className="others">
              <Switch>
                <Route exact path = "/">
                  <Home />
                </Route>
                <Route path = "/members">
                  <Members />
                </Route>
                <Route path = "/edit-member/:cin">
                  <Member />
                </Route>
                <Route path = "/add-member">
                  <Add_Member/>
                </Route>
                <Route path = "/doctors">
                  <Doctors />
                </Route>
                <Route path = "/edit-doctor/:cin">
                  <Edit_Doctors />
                </Route>
                <Route path = "/add-doctor">
                  <Add_Doctor/>
                </Route>
                <Route path = "/Meeting">
                  <Meeting />
                </Route>
                <Route path = "/send-messages">
                  <Messages />
                </Route>
              </Switch>
              </div>
            </div>
        </div>
      </Router>
    );
  // }
  // else{
  //   window.location.href = "http://localhost:7882/login-system?forbidden=404";
  // }
}
export default App;