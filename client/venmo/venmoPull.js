
function buildContainer() {
  $('#container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Uber vs. Lyft Mentions'
          },
          subtitle: {
              text: '200,000 payments'
          },
          xAxis: {
              categories: [
                  'Ride Sharing Service'
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
              name: 'Uber',
              data: [1318]

          }, {
              name: 'Lyft',
              data: [282]

          }]
      });
}

Template.venmoPull.rendered = function() {
    buildContainer();
}
