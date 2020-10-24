var barContext = document.getElementById('bar-chart-components').getContext('2d');

var barChart = new Chart(barContext, {
    type: 'horizontalBar',
    data: {
        labels: ["CPU", "Disco", "Memória"],
        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
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
                    display: false
                }
            }]
        }
    }
});