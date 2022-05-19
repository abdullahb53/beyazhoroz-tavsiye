// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

  var ctx = document.getElementById("myPolarAreaChart");
   var myPolarAreaChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels:["","",""],
      datasets: [{
        label: "Label",
        backgroundColor: ["1","2","3"],
        borderColor: ["1","2","3"],
        data: [2,3,4],
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
            maxTicksLimit: 20
          }
        }],
        yAxes: [{
          ticks: {
            min: 1,
            max: 10,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });


