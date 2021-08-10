import './Messages.scss'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';

export default function Messages() {
    const {t} = useTranslation();
    function sendByPhone(e){
        e.preventDefault();
        Swal.fire(
            t("Send with Phone"),
            t("Your message has been sended"),
            'success',
          )
    }
    function sendByEmail(e){
        e.preventDefault();
        Swal.fire(
            t("Send with E-mail"),
            t("Your message has been sended"),
            'success',
          )
    }
    return (
    <div className="message">
        <div className = "add_message">
            <h1 className="titel">{t("Send with E-mail")}</h1>
            <form action="" className="newMessage">
                <div className="Item">
                    <label htmlFor="">{t("To")} :</label>
                    <input type="text" placeholder = {t("Put Email")} />
                </div>
                <div className="Item">
                    <label htmlFor="">{t("Subject")} :</label>
                    <input type="text" placeholder = {t("Put Subject")} />
                </div>
                <div className="Item">
                    <label htmlFor="">Message :</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="btnInsert" onClick ={sendByEmail}>{t("Send")}</button>
            </form>
        </div>
        <div className = "add_message phone">
            <h1 className="titel">{t("Send with Phone")}</h1>
            <form action="" className="newMessage">
                <div className="Item">
                    <label htmlFor="">{t("Number")} :</label>
                    <input type="text" placeholder = {t("Put Number")} />
                </div>
                <div className="Item">
                    <label htmlFor="">{t("Subject")} :</label>
                    <input type="text" placeholder = {t("Put Subject")} />
                </div>
                <div className="Item">
                    <label htmlFor="">Message :</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="btnInsert" onClick = {sendByPhone}>{t("Send")}</button>
            </form>
        </div>
    </div>
    )
}
