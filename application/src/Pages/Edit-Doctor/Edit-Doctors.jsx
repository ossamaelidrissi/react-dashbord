import './Edit-Doctors.scss'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublishIcon from '@material-ui/icons/Publish';
import {Link} from 'react-router-dom'

export default function Edit_Doctors() {
    return (
    <div className = "doctor">
        <div className="container">
            <h1 className="title">Edit Member</h1>
            <Link to = "/add-doctor">
                <button className="addDoctor">Create</button>
            </Link>    
        </div>
        <div className="doctorContainer">
            <div className="display">
                <div className="Top">
                    <img src="https://picsum.photos/500/402" alt="user Image" srcset="" className = "doctorImg" />
                    <div className="doctorTopTitle">
                        <span className="doctorName">Mohamed Ramadan</span>
                        <span className="doctorTitle"> Artiste</span>
                    </div>
                </div>
                <div className="doctorBottom">
                    <span className="account">Member Details</span>
                    <div className="doctorrInfo">
                        <CalendarTodayIcon className = "Icon" />
                        <span className="InfoTitle">1980-01-01 </span>
                    </div>
                    <div className="doctorInfo">
                        <PhoneIcon className = "Icon" />
                        <span className="InfoTitle">070644331 </span>
                    </div>
                    <div className="doctorInfo">
                        <MailIcon className = "Icon" />
                        <span className="InfoTitle">MohammedRamadan@Gmail.com </span>
                    </div>
                    <div className="doctorInfo">
                        <LocationOnIcon className = "Icon" />
                        <span className="InfoTitle">Marrakech , Tamsluht </span>
                    </div>
                </div>
            </div>
            <div className="update">
                <span className="UpdateTitle">Edit</span>
                <form action="#" className="UpdateFomr">
                    <div className="Updateleft">
                        <div className="UpdateItem">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder = "Mohamed Ramadan" className = "name" />
                        </div>
                        <div className="UpdateItem">
                            <label htmlFor="">E-mail</label>
                            <input type="text" placeholder = "MohammedRamadan@Gmail.com" className = "email" />
                        </div>
                        <div className="UpdateItem">
                            <label htmlFor="">Phone</label>
                            <input type="text" placeholder = "070644331" className = "phone" />
                        </div>
                        <div className="UpdateItem">
                            <label htmlFor="">Adresse</label>
                            <input type="text" placeholder = "Marrakech , Tamsluhte" className = "adresse" />
                        </div>
                        <div className="UpdateItem">
                            <label htmlFor="">BirthDay</label>
                            <input type="date" className = "date" />
                        </div>
                    </div>
                    <div className="Updateright">
                        <div className="Upload">
                            <img src="https://picsum.photos/500/402" alt="Image" className="img" />
                            <label htmlFor="file"><PublishIcon className = "icon" /></label>
                            <input type="file" id= "file" style = {{display : "none"}} />
                        </div>
                        <button className="btnUpdate">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
