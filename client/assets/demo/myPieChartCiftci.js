// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';



// Pie Chart Example
  var ctx = document.getElementById("myPieChartCiftci");
  var myPieChartCiftci = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["1","2","3"],
      datasets: [{
        data: [1,2,3],
        backgroundColor:["1","2","3"],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: ''
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 0
          }
        }],
        yAxes: [{
          
          gridLines: {
            display: false
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });

