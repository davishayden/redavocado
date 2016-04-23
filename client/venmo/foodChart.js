
function buildContainer() {
  $('#container3').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Food Mentions'
          },
          subtitle: {
              text: '200,000 payments'
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
              name: 'Pizza',
              data: [708]

          }, {
              name: 'Salad',
              data: [559]

          } , {
              name: 'Thai',
              data: [360]

          } , {
              name: 'BBQ',
              data: [274]

          }
          , {
              name: 'Sushi',
              data: [241]

          }
          , {
              name: 'Boba',
              data: [202]

          }
          , {
              name: 'Chipotle',
              data: [190]

          }
          , {
              name: 'Beans',
              data: [183]

          } , {
              name: 'Pho',
              data: [164]

          } 
        ]
      });
}

Template.foodChart.rendered = function() {
    buildContainer();
}
