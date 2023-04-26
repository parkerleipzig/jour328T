var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 186, y: 59},
                ],
                label: "Starboy, The Weeknd",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 178, y: 80},
                ],
                label: "Despacito, Luis Fonsi",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 178, y: 80},
                ],
                label: "Despacito - Remix, Luis Fonsi",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 174, y: 90},
                ],
                label: "Wonderwall - Remastered, Oasis",
                borderColor: "red",
                backgroundColor:"#ffcccb",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 171, y: 73},
                ],
                label: "Blinding Lights, The Weeknd",
                borderColor: "purple",
                backgroundColor: "rgb(203, 195, 227)",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 171, y: 74},
                ],
                label: "Lose Yourself, Eminem",
                borderColor: "pink",
                backgroundColor:"#FFE4E1",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 170, y: 64},
                ],
                label: "Stressed Out, Twenty One Pilots",
                borderColor: "yellow",
                backgroundColor:"#ffffe0",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 168, y: 82},
                ],
                label: "Thunder, Imagine Dragons",
                borderColor: "black",
                backgroundColor:"rgb(211, 211, 211)",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 160, y: 52},
                ],
                label: "rockstar (feat. 21 Savage), Post Malone",
                borderColor: "teal",
                backgroundColor:"#90E4C1",
                borderWidth:2,
                
              },
              {
                data: [
                {x: 160, y: 87},
                ],
                label: "rockstar (feat. 21 Savage), Post Malone",
                borderColor: "gold",
                backgroundColor:"#FDDC5C",
                borderWidth:2,
              }

            ]
          },
          options: {
            scales: {
                y: {
                  title: {
                       display: true,
                       text: 'Energy'
                  }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Beats per Minute'
                    }
                }
              },
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 songs with the highest beats per minute of the 100 most streamed songs on Spotify',
                    font: {
                        size: 18
                    }
            },
            subtitle: {
                display: true,
                text: 'Higher beats per minute does not correlate to the energy measurement'
            }
        }
            
          }
        });