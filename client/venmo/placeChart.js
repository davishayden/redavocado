
function buildContainer() {
  $('#container1').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Place Mentions'
          },
          subtitle: {
              text: '1,000,000 payments'
          },
          xAxis: {
              categories: [
                  'Location'
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
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Coachella',
              data: [1784]

          }, {
              name: 'Vegas',
              data: [1392]

          }]
      });
}

Template.placeChart.rendered = function() {
    buildContainer();
}
