import React from 'react'
import { Bar} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
// import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

var Chart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','August','Sept','Oct','Nov','Dec'],
          datasets: [
            {
              label: '#Total Income',
              data: [14700, 15200, 16700, 5800, 9000, 15000,5600,17444,7555,8556,4445,18856],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Amount',
              data: [14700, 15200, 16700, 5800, 9000, 15000,5600,17444,7555,8556,4445,18856],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        }}
        height={350}
        width={1562}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 35,
            },
          },
        }}
      />
    </div>
  )
}

export default Chart;