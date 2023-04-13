var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "U.S.",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "red",
                backgroundColor:"#ffcccb",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "purple",
                backgroundColor: "rgb(203, 195, 227)",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "pink",
                backgroundColor:"#FFE4E1",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "yellow",
                backgroundColor:"#ffffe0",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "black",
                backgroundColor:"rgb(211, 211, 211)",
                borderWidth:2,
                
              }, {  
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "teal",
                backgroundColor:"#90E4C1",
                borderWidth:2,
                
              },

            ]
          },
          options: {
            scales: {
                y: {
                  title: {
                       display: true,
                       text: 'GDP per capita'
                  }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Life expectancy'
                    }
                }
              },
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Top ten countries life expectancy compared to their GDP ',
                    font: {
                        size: 18
                    }
            },
            subtitle: {
                display: true,
                text: 'The United States and Japan consistently have the higher life expectancy and GDP per capita'
            }
        }
            
          }
        });