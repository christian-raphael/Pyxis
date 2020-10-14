var doughnutContext = document.getElementById('doughnut-setor').getContext('2d');

var doughnutChart = new Chart(doughnutContext, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Cartão de Crédito', 'Empréstimos', 'Cobrança'],
        datasets: [{
            // borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            data: [25, 10, 39]
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
    }
});
