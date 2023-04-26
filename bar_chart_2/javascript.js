var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2018', '2021'],
        datasets: [{
            label: 'Sugar',
            data: [75, 0, 0],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: 'Girls Like You (feat. Cardi B)',
            data: [0, 85, 0],
            backgroundColor: [
                '#FFA500'
            ],
        },
        {
            label: 'Memories',
            data: [0, 0, 78],
            backgroundColor: [
                 '#0000FF'
            ]
        }],
    
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Danceability of Maroon 5 songs on the top 100 most streamed songs on Spotify',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Danceability has remained high for Maroon 5 songs over the years'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});