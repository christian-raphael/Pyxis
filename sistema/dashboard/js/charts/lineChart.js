var lineContext = document.getElementById('line-chart').getContext('2d');

var lineChart = new Chart(lineContext, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: [0, 4, 2, 8, 10, 8, 6],
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
    if(lineChart.data.datasets[0].data.length == 7) {
        lineChart.data.datasets[0].data.shift();
    }
    lineChart.data.datasets[0].data.push( Math.random() * 10 + 1 );
    lineChart.update();
}, 2000);