import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import classes from './Chart.module.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const LineGraph = ({ labels, dataPoints }) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Consecutive Hours Slept',
                data: dataPoints,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Day',
                },
                beginAtZero: true,
            },
            y: {
                title: {
                    display: true,
                    text: 'Hours',
                },
                beginAtZero: true, 
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <Line data={data} options={options} />
    )
}

export default LineGraph;