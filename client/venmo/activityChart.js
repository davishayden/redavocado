
function buildContainer() {
  $('#container4').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Activity Mentions'
          },
          subtitle: {
              text: '1,000,000 payments'
          },
          xAxis: {
              categories: [
                  'Activity'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Mention Count'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.4,
                  borderWidth: 0
              }
          },
          series: [{
              name:   '🍕',
              data: [12102]

          }, {
              name: ' 🍻',
              data: [8503]

          }, {
              name: ' 🍴',
              data: [5991]

          }, {
              name: ' 🍺',
              data: [5612]

          }, {
              name: ' 🚕',
              data: [4599]

          }, {
              name: '⛽',
              data: [4593]

          }, {
              name: '🏠💸',
              data: [3945]

          }, {
              name: '🍷',
              data: [3930]

          }]
      });
}


function buildContainer1() {
  $('#container4').highcharts({

       chart: {
           type: 'bubble',
           plotBorderWidth: 1,
           zoomType: 'xy'
       },

       legend: {
           enabled: false
       },

       title: {
           text: 'Emoji Mentions'
       },

       subtitle: {
           text: '1,000,000 payments'
       },

       xAxis: {
           gridLineWidth: 0,
           title: {
               text: ''
           },
           labels: {
                enabled: false,
               format: ''
           }
       },

       yAxis: {
           startOnTick: false,
           endOnTick: false,
           title: {
               text: ''
           },
           labels: {
                enabled: false,
               format: '{value}'
           },
           maxPadding: 0.2,
           plotLines: [{
               color: 'black',
               dashStyle: 'dot',
               width: 2,
               value: 50,
               label: {
                   align: 'right',
                   style: {
                       fontStyle: 'italic'
                   },
                   text: '',
                   x: -10
               },
               zIndex: 3
           }]
       },

       tooltip: {
           useHTML: true,
           headerFormat: '<table>',
           pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>'+
               '<tr><th>Mentions:</th><td>{point.z}</td></tr>',
           footerFormat: '</table>',
           followPointer: true
       },

       plotOptions: {
           series: {
               dataLabels: {
                   enabled: true,
                   format: '{point.name}'
               }
           }
       },

       series: [{
           data: [
               { x: 10, y: 100, z: 12102, name: '🍕', country: '🍕' },
               { x: 170, y: 100, z: 8503, name: '🍻', country: '🍻' },
               { x: 300, y: 100, z: 5991, name: '🍴', country: '🍴' },
               { x: 400, y: 100, z: 5612, name: '🍺', country: '🍺' },
               { x: 500, y: 100, z: 4599, name: ' 🚕', country: '🚕' },
               { x: 600, y: 100, z: 4593, name: '⛽', country: '⛽' },
               { x: 700, y: 100, z: 3945, name: '🏠💸', country: '🏠💸' },
               { x: 800, y: 100, z: 3930, name: '🍷', country: '🍷' },
               { x: 900, y: 100, z: 3504, name: ' 🎉', country: '🎉' }
           ]
       }]

   });
}


Template.activityChart.rendered = function() {
    buildContainer1();
}
