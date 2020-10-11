var pieContext = document.getElementById('pie-chart').getContext('2d');

var pieChart = new Chart(pieContext, {
    type: "doughnut",
    data: {
        labels: [
            "Red",
            "Yellow",
            "Blue"
        ],
        datasets: [{
            data: [10, 10, 10],
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