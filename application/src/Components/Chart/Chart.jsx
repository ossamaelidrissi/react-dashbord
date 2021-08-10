import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import './chart.scss'

    function Chart(){
        const {t} = useTranslation();
        const data = [
            {
                name : t("Mens") , number : 150
            },
            {
                name : t("Womans") , number : 70
            },
            {
                name : t("Kids") , number : 20
            },
        ]
        return (
            <div className = "chart">
                <h3 className = "title">{t("Clients Analytics")}</h3>
                <div className = "Graph">
                    <ResponsiveContainer width="100%" height="100%" aspect = {4 / 1}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}
                        barSize={20}
                  >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="number" fill="#8884d8" background={{ fill: '#eee' }} />
                    
                  </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        )
    }

export default Chart
