var lineContext = document.getElementById('line-chart').getContext('2d');

var lineChart = new Chart(lineContext, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                borderColor: 'rgb(54 162 235)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                data: [0, 5, 10, 15, 5, 25, 5, 10, 15, 5, 10, 5],
            },
            {
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                data: [4, 2, 8, 10, 8, 6, 4, 2, 8, 10, 8, 6],
            }
        ],
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
    if(lineChart.data.datasets[0].data.length == 12) {
        lineChart.data.datasets[0].data.shift();
        lineChart.data.datasets[1].data.shift();
    }
    lineChart.data.datasets[0].data.push( Math.random() * 10 + 1 );
    lineChart.data.datasets[1].data.push( Math.random() * 10 + 1 );
    lineChart.update();
}, 2000);