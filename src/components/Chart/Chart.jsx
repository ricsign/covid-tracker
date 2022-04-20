import React, {useState, useEffect} from 'react';

import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
    
// Must register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    // When chart mounted, fetch daily data from api
    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData());
        };

        getDailyData();
        
    }, [])

    const lineChart = (
        dailyData.cases ? <Line
            data = {{
                labels: Object.entries(dailyData.cases).flatMap(a => a[0]), // a[0]: date
                datasets: [{
                    data: Object.entries(dailyData.cases).flatMap(a => a[1]), // a[1]: number of people
                    label: "Confirmed",
                    borderColor: "#3333ff",
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    tension: 0.3,
                    fill: true
                },{
                    data: Object.entries(dailyData.recovered).flatMap(a => a[1]), // a[1]: number of people
                    label: "Recovered",
                    borderColor: "green",
                    backgroundColor: 'rgba(0, 255, 0, 0.3)',
                    tension: 0.5,
                    fill: true
                },{
                    data: Object.entries(dailyData.deaths).flatMap(a => a[1]), // a[1]: number of people
                    label: "Deceased",
                    borderColor: "red",
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    tension: 0.3,
                    fill: true
                }],
            }}
        /> : null
    );

    // if(dailyData.cases) console.log(Object.entries(dailyData.cases).flatMap(a => a[1]));
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;