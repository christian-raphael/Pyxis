var pieContext = document.getElementById('pie-chart').getContext('2d');

var pieChart = new Chart(pieContext, {
    type: "doughnut",
    data: {
        labels: [
            "Máquinas para reparo",
            "Máquinas ativas",
            "Máquinas inativas"
        ],
        datasets: [{
            data: [20, 70, 10],
            backgroundColor :["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"] 
        }],
       
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
    }
});