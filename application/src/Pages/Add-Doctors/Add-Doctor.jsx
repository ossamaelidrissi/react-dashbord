import './Add-Doctors.scss'

export default function Add_Doctor() {
    return (
        <div className = "add_doctor">
            <h1 className="titel">New Doctor</h1>
            <form action="" className="newDoctor">
                <div className="Item">
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder = "put name" />
                </div>
                <div className="Item">
                    <label htmlFor="">E-mail :</label>
                    <input type="text" placeholder = "put email" />
                </div>
                <div className="Item">
                    <label htmlFor="">Phone :</label>
                    <input type="text" placeholder = "put phone" />
                </div>
                <div className="Item">
                    <label htmlFor="">Adresse :</label>
                    <input type="text" placeholder = "put adresse" />
                </div>
                <div className="Item">
                    <label htmlFor="">Birthday :</label>
                    <input type="date" />
                </div>
                <div className="Item">
                    <label htmlFor="">CIN :</label>
                    <input type="text" placeholder = "CIN" />
                </div>
                <div className="Item">
                    <label htmlFor="">Gender :</label>
                    <div className="Gender">
                        <input type="radio" name = "gender" id = "Male"  value = "Male"/>
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name = "gender" id = "Female"  value = "Female"/>
                        <label htmlFor="Female">Female</label>
                    </div>
                </div>
                <button className="btnInsert">Create</button>
            </form>
        </div>
    )
}
