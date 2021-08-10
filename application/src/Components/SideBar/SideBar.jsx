import React,{useState,useEffect} from 'react'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ReportIcon from '@material-ui/icons/Report';
import {Link , BrowserRouter as Router} from 'react-router-dom'
import {useTranslation} from 'react-i18next';
import './SideBar.scss'
export default function SideBar() {
    const [mode , setMode] = useState( () => localStorage.getItem("mode"));
    const {t} = useTranslation();
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
            <div className = "sidebar">
                <div className="sidebarwrapper">
                    <div className="sidebarMenu">
                        <h3 className= "sidebarTitle">Dashbord</h3>
                        <ul className="sidebarlist">
                            <Link to ="/" className = "link">
                                <li className = "sidebarlistItem">
                                    <LineStyleIcon className = "sidebarIcon "/>
                                     {t("Home")}
                                </li>
                            </Link>
                            <li className = "sidebarlistItem">
                                < TrendingUpIcon className = "sidebarIcon"/>
                                {t("Analytics")} 
                            </li>
                            <Link to = "/Meeting" className = "link">
                                <li className = "sidebarlistItem">
                                    <MeetingRoomIcon className = "sidebarIcon"/>
                                    {t("Meeting")}
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className= "sidebarTitle">Notifications</h3>
                        <ul className="sidebarlist">
                            <li className = "sidebarlistItem active">
                                <MailOutlineIcon className = "sidebarIcon "/>
                               <a href="https://mail.google.com/mail/u/1/#inbox" className = "link">Mail</a> 
                            </li>
                            <Link to = "/send-messages" className = "link">
                                <li className = "sidebarlistItem">
                                    <MessageIcon className = "sidebarIcon"/>
                                    Messages
                                </li>
                            </Link>
                            
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className= "sidebarTitle">Clients</h3>
                        <ul className="sidebarlist">
                        <Link to ="/members" className = "link">
                            <li className = "sidebarlistItem active">
                                <PeopleOutlineIcon className = "sidebarIcon "/>
                                {t("Members")}
                            </li>
                         </Link>
                            <li className = "sidebarlistItem">
                                <ReportIcon className = "sidebarIcon"/>
                                {t("Reports")}
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className= "sidebarTitle">Doctors</h3>
                        <ul className="sidebarlist">
                        <Link to ="/doctors" className = "link">
                            <li className = "sidebarlistItem active">
                                <LocalHospitalIcon className = "sidebarIcon "/>
                                Doctors
                            </li>
                        </Link>
                            <li className = "sidebarlistItem">
                                <ReportIcon className = "sidebarIcon"/>
                                {t("Reports")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
