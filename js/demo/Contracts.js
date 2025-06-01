//First_value_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 35.5; // Define the percentage value

var data = anychart.data.set([
  ['الثلاثاء', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#9747FF' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('First_value_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();
//Second_value_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 20.5; // Define the percentage value

var data = anychart.data.set([
  ['الأحد', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#FF9F40' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Second_value_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();

//Third_value_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 15.5; // Define the percentage value

var data = anychart.data.set([
  ['الأربعاء', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#4BC0C0' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Third_value_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();


//First_period_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 35.5; // Define the percentage value

var data = anychart.data.set([
  ['21:00 - 23:59', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#9747FF' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('First_period_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();
//Second_period_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 20.5; // Define the percentage value

var data = anychart.data.set([
  ['18:00 - 20:59', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#FF9F40' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Second_period_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();
//Third_period_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 15.5; // Define the percentage value

var data = anychart.data.set([
  ['09:00 - 11:59', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#4BC0C0' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Third_period_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();

//First_Distance_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 35.5; // Define the percentage value

var data = anychart.data.set([
  ['30 أكثر من', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#9747FF' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('First_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();
//Second_Distance_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 20.5; // Define the percentage value

var data = anychart.data.set([
  ['4 - 7', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#FF9F40' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Second_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();
//Third_Distance_Charts ///////////////////////////////////////////////////////////////////////
var palette = anychart.palettes.distinctColors();
var percentage = 15.5; // Define the percentage value

var data = anychart.data.set([
  ['11 - 15', percentage],
  [' اخري', 100 - percentage]
]);

// set the colors according to the brands
palette.items([
  { color: '#4BC0C0' },
  { color: '#CCC' },
]);

// apply the donut chart color palette
// create a pie chart with the data
var chart = anychart.pie(data)
// set the chart radius making a donut chart
chart.palette(palette);
chart.innerRadius('80%');
chart.container('Third_Distance_Charts');
chart.legend(false);
chart.labels(false)
chart.tooltip(false)
chart.draw();