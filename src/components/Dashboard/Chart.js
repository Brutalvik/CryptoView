import React from 'react'
import { Line, Chart } from 'react-chartjs-2'
import ChartDataLabels from "chartjs-plugin-datalabels";


const Chartdata = () => {
    Chart.register(ChartDataLabels);
    
    return (
        <div>
           <h1>Chart Component</h1>
           <Line></Line>
        </div>
    )
}

export default Chartdata
