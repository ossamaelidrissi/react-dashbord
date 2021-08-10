import React,{useState,useEffect} from 'react';
import './TopBar.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SecurityIcon from '@material-ui/icons/Security';
import {Link , BrowserRouter as Router} from 'react-router-dom'
import Cookies from 'universal-cookie';
import Typed from 'react-typed'
import Swal from 'sweetalert2'
import i18n from '../../Hooks/useTranslator';


export default function TopBar() {


    function changeLang(lang) {
        return ()=>{
            i18n.changeLanguage(lang);
          Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
              })
           
        };
    }
    const [mode , setMode] = useState( () => localStorage.getItem("mode"));
   const cookies = new Cookies();
   function deleteCookie(){
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log Out!'
          }).then( result => {
            if (result.isConfirmed) {
                cookies.remove('login');
                window.location.href = "http://localhost:7882/login-system/"
                }
    })
    ;
}
    function toggleS(){
        const setting = document.querySelector('.setting');
        setting.classList.toggle('a');
    }
    function toggleL(){
    const lang = document.querySelector('.lang');
    lang.classList.toggle('a');
    };
    useEffect(() =>{
        if(mode === "dark"){
            
                document.body.classList.add("dark-mode");
                localStorage.setItem("mode","dark");
        }else{
                document.body.classList.remove("dark-mode");
                localStorage.setItem("mode","light");
        }
    },[mode])
    return (
        <div className = "topbar">
            <div className="topbarwrapper">
                <div className="topbar_left">
                    <span className = "logo" ><Typed className = "Typed" strings = {["Skilled-Team.com"]} typeSpeed = {100} /></span>
                </div>
                <div className="topbar_right">
                    <div className="topbarIconsContainer">
                        <NotificationsNoneIcon />
                        <span className = "topIconBag">0</span>
                        <div className="setting">
                            <ul className = "menu-bar">
                                <li onClick = {() => setMode(mode => mode === "dark" ? "light" : "dark")} >
                                    <Brightness4Icon className = "icon" />
                                  <Link className = "link"> 
                                    Display
                                  </Link>
                                  
                                </li>
                                <li><HelpIcon className = "icon"/>
                                    <Link className = "link">
                                        Help & Support
                                    </Link>
                                </li>
                                <li><SecurityIcon className = "icon"/>
                                    <Link className = "link">
                                    Privacy & Security
                                    </Link>
                                </li>
                                <li onClick = {deleteCookie}><ExitToAppIcon className = "icon"/>
                                    <Link className = "link">
                                        Log Out
                                    </Link>
                                </li>
                                </ul>
                                <br />
                                <span style = {{color:"gray"}}>Skill-Team © 2021</span> 
                        </div>
                        <div className="lang">
                            <ul>
                                <li onClick = {changeLang("en")}>
                                <img src="http://localhost:7882/login-system/View/img/uk.svg" alt="" srcset="" className="en" />
                                    English
                                </li>
                                <li onClick = {changeLang("fr")}>
                                <img src="http://localhost:7882/login-system/View/img/fr.png" alt="" srcset="" className="en" />
                                    Francais
                                </li>
                            </ul>
                            <br />
                            <span style = {{color:"gray"}}>Skill-Team © 2021</span> 
                        </div>
                    </div>
                    <div className="topbarIconsContainer" onClick = {toggleS}>
                        <SettingsIcon />
                        <span className = "topIconBag">4</span>
                    </div>
                    <div className="topbarIconsContainer" onClick = {toggleL}>
                        <LanguageIcon />
                        <span className = "topIconBag">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
