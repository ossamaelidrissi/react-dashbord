import './WidgetLg.scss'
import TranslationFr from '../../Locales/fr/TranslationFr.json'
import { useTranslation } from 'react-i18next'
export default function WidgetSm() {
    const {t} = useTranslation();
    return (
        <div className = "WidgetLg">
            <h3 className="WidgetLgTitle"> {t("Meeting")} </h3>
            <table className="table">
                <tr className="tr">
                    <th className="th">Client</th>
                    <th className="th">{t("Time")}</th>
                    <th className="th">{t("Doctor")}</th>
                    <th className="th">{t("Hospital")}</th>
                </tr>
                <tr className="tr">
                    <td className="User">
                        <img src="https://picsum.photos/500/402" alt="Profile" className="img" />
                        <span className="name">Ahmed GG</span>
                    </td>
                    <td className="time">
                        07:00
                    </td>
                    <td className="doctor">
                        Yossef Saidi
                    </td>
                    <td className="hospital">
                        Airoport
                    </td>
                </tr>
                <tr className="tr">
                    <td className="User">
                        <img src="https://picsum.photos/500/400" alt="Profile" className="img" />
                        <span className="name">Ahmed GG</span>
                    </td>
                    <td className="time">
                        18:30
                    </td>
                    <td className="doctor">
                        Yossef Saidi
                    </td>
                    <td className="hospital">
                        Airoport
                    </td>
                </tr>
                <tr className="tr">
                    <td className="User">
                        <img src="https://picsum.photos/500/401" alt="Profile" className="img" />
                        <span className="name">Ahmed GG</span>
                    </td>
                    <td className="time">
                        15:30
                    </td>
                    <td className="doctor">
                        Yossef Saidi
                    </td>
                    <td className="hospital">
                        Airoport
                    </td>
                </tr>
                <tr className="tr">
                    <td className="User">
                        <img src="https://picsum.photos/500/403" alt="Profile" className="img" />
                        <span className="name">Ahmed GG</span>
                    </td>
                    <td className="time">
                        18:00
                    </td>
                    <td className="doctor">
                        Yossef Saidi
                    </td>
                    <td className="hospital">
                        Airoport
                    </td>
                </tr>
            </table>
        </div>
    )
}
