import {Line,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default Line.extend({
    mixins: [reactiveProp],
    mounted () {
        this.renderChart(
            this.chartData
            // {
            //     labels: ["1","2","3","4","5","6","7","8",],
            //     datasets: [
            //         {
            //             label: 'Data One',
            //             backgroundColor: '#ffffff',
            //             data: [3.6662,3.6298,3.6209,3.6662,3.6716,3.6600,3.6681,3.6366]
            //         }
            //     ]
            // }
            ,
            {
                responsive: true,
                //maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: false,
                            min: 3.6,
                            //stepValue: 0.001,
                            max: 3.7
                        }
                    }]
                }
            }
        )
    }
})