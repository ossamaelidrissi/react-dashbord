import Info from '../../Components/featuredInfo/Info'
import Chart from '../../Components/Chart/Chart'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import './Home.scss'


export default function Home() {
    return (
        <div className = "home">
            <Info />
            <Chart />
            <div className = "homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
