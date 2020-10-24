var lineContext = document.getElementById('line-chart-pc-week').getContext('2d');

var lineChartWeek = new Chart(lineContext, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sáb', 'Dom'],
        datasets: [{
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: [4, 2, 8, 10, 8, 6, 4],
        }],
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        animation: {
            easing: "easeOutQuad"
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

setInterval(function() {
    if(lineChartWeek.data.datasets[0].data.length == 7) {
        lineChartWeek.data.datasets[0].data.shift();
    }
    lineChartWeek.data.datasets[0].data.push( Math.random() * 10 + 1 );
    lineChartWeek.update();
}, 2000);