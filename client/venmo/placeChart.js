
function buildContainer() {
  $('#container1').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Place Mentions'
          },
          subtitle: {
              text: '200,000 payments'
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
              data: [426]

          }, {
              name: 'Vegas',
              data: [257]

          }]
      });
}

Template.placeChart.rendered = function() {
    buildContainer();
}
