// //////////////////////////////////////////////////  الرئيسية /////////////////////////////////////////////////////////////////////////
// Pie Chart contracts
const pieChartEl = document.getElementById('myPieChart');
const pieChartData = {
  labels: ['منتهيه', 'غدا', 'اليوم' , 'لاحقا'],
  datasets: [{
    data: [342, 313, 245, 210],
    backgroundColor: [ 'rgba(255, 64, 105, .9)','rgba(255, 159, 64, .9)', 'rgba(153, 102, 255,.9 )','rgba(54, 162, 235, .9)'],
    borderColor: ['rgba(255, 64, 105, .9)','rgba(255, 159, 64, .9)',  'rgba(153, 102, 255,.9 )','rgba(54, 162, 235, .9)'],

  }]
};

const pieChart = new Chart(pieChartEl, {
  type: 'doughnut',
  data: pieChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#7A7A7A",
        bodyFontColor: "#060A10",
        borderColor: '#ffffff',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        
      },
      legend: {
        position: 'right',
        rtl: true,
        labels: {
            font: {
                family: "'Cairo', sans-serif",
                size: 11
            }
        }
    }
    }
  }
});

// دائنون
var palette = anychart.palettes.distinctColors();
var percentage = 21498.25;  

var label = anychart.standalones.label();
label
  .useHtml(true)
  .text(
    '<span style="color: #313136; font-weight:700; font-family: Cairo, sans-serif;">' + 
    percentage.toLocaleString('en-US') + 
    '</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');

var data = anychart.data.set([
  ['فورد', percentage],
  ['اخري', 30498 - percentage]  
]);

palette.items([
  { color: '#FF9FB3' },
  { color: '#E6E6E6' },
]);

var chart = anychart.pie(data);
chart.palette(palette);
chart.innerRadius('70%');
chart.container('chart-creditor');
chart.legend(false);
chart.labels(false);
chart.tooltip(false);
chart.center().content(label);
chart.draw();

// مدينون

var palette = anychart.palettes.distinctColors();
var percentage = 186.07; 
var label = anychart.standalones.label();
label
 .useHtml(true)
 .text(
    '<span style="color: #313136; font-weight:700; font-family: Cairo, sans-serif;">' + 
    percentage.toLocaleString('en-US') + 
    '</span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');
var data = anychart.data.set([
  ['فورد', percentage],
  [' اخري', 1500 - percentage]
]);

palette.items([
  { color: '#9AD0F4' },
  { color: '#E6E6E6' },
]);

var chart = anychart.pie(data)
chart.palette(palette);
chart.innerRadius('70%');
chart.container('chart-debtors');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.center().content(label);
chart.draw();

// 

// Bar Chart 

var myChart;

function createBarChart() {
  var chartContainer = document.getElementById("barChart").parentElement;
  var canvas = document.getElementById("barChart");
  
  chartContainer.style.opacity = '0';
  
  var barChart = canvas.getContext("2d");
  
  if (myChart) {
    myChart.destroy();
  }
  
  myChart = new Chart(barChart, {
    type: "bar",
    data: {
      labels: ['نقدًا', 'مدى', 'فيزا', 'امريكن اكسبريس', ' ماستر كارد'],
      datasets: [
        {
          data: [100, 20, 50, 45, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          barThickness: 35
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        onComplete: function() {
          chartContainer.style.opacity = '1';
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: true 
          },
          ticks: {
            display: true,
            font: {
              family: "'Cairo', sans-serif",
              size: 11
            }
          }
        },
        y: {
          grid: {
            display: true
          },
          beginAtZero: true,
          ticks: {
            font: {
              size: 11 
            }
          }
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  createBarChart();
});

window.addEventListener('resize', function() {
  var chartContainer = document.getElementById("barChart").parentElement;
  chartContainer.style.transition = 'opacity 0.1s ease-in-out';
  chartContainer.style.opacity = '0';
  
  clearTimeout(window.resizingTimer);
  window.resizingTimer = setTimeout(function() {
    createBarChart();
  }, 20);
});