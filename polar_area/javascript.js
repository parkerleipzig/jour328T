var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Believer, Imagine Dragons',
              'Stressed Out, Twenty One Pilots',
              'Thunder, Imagine Dragons',
              'Heathens, Twenty One Pilots',
              'Demons, Imagine Dragons',
              'Radioactive, Imagine Dragons'
            ],
            datasets: [{
              label: '',
              data: [67, 65, 29, 55, 43, 24],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(216,191,216)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Valence (positive mood) of modern rock songs in the top 100 most streamed Spotify songs'
              }
            }
          }
        });