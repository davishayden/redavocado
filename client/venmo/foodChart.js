
function buildContainer() {
  $('#container3').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Food Mentions'
          },
          subtitle: {
              text: '1,000,000 payments'
          },
          xAxis: {
              categories: [
                  'Food'
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
                  '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
              name: 'Pizza',
              data: [4193]

          } , {
              name: 'Beer',
              data: [3116]

          } , {
              name: 'Thai',
              data: [1928]

          }
          , {
              name: 'Brunch',
              data: [1841]

          }
          , {
              name: 'BBQ',
              data: [1724]

          }
          , {
              name: 'Chicken',
              data: [1587]

          }
          , {
              name: 'Sushi',
              data: [972]

          } , {
              name: 'Chipotle',
              data: [885]

          }
        ]
      });
}

Template.foodChart.rendered = function() {
    buildContainer();
}
