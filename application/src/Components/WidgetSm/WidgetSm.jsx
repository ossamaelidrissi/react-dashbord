import './WidgetSm.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
export default function WidgetSm() {
    return (
        <div className = "WidgetSm">
            <span className="Title">New Join Members</span>
            <div className="List">
                <li className="Item">
                    <img src="https://picsum.photos/500/403" alt="images Profile" className="Img" />
                    <div className="user">
                        <div className="name">Mohammed GG</div>
                        <div className="UserTitle">Programmer</div>
                    </div>
                    <button className="btn">
                        <VisibilityIcon className = "btnIcon"/> Display
                    </button>
                </li>
                <li className="Item">
                    <img src="https://picsum.photos/500/402" alt="images Profile" className="Img" />
                    <div className="user">
                        <div className="name">Mohammed GG</div>
                        <div className="UserTitle">Teacher</div>
                    </div>
                    <button className="btn">
                        <VisibilityIcon className = "btnIcon"/> Display
                    </button>
                </li>
                <li className="Item">
                    <img src="https://picsum.photos/500/401" alt="images Profile" className="Img" />
                    <div className="user">
                        <div className="name">Mohammed GG</div>
                        <div className="UserTitle">Software anginner</div>
                    </div>
                    <button className="btn">
                        <VisibilityIcon className = "btnIcon"/> Display
                    </button>
                </li>
                <li className="Item">
                    <img src="https://picsum.photos/500/400" alt="images Profile" className="Img" />
                    <div className="user">
                        <div className="name">Mohammed GG</div>
                        <div className="UserTitle">Doctor</div>
                    </div>
                    <button className="btn">
                        <VisibilityIcon className = "btnIcon"/> Display
                    </button>
                </li>
            </div>
        </div>
    )
}
