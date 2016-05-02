
function buildContainer() {
  $('#container2').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Interesting Mentions'
          },
          subtitle: {
              text: '20,000 payments'
          },
          xAxis: {
              categories: [
                  'Word'
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
              name: 'Cash',
              data: [2438]

          }, {
              name: 'Comcast',
              data: [1582]

          }, {
              name: 'Costco',
              data: [1436]

          }, {
              name: 'Drugs',
              data: [829]

          }, {
              name: 'Bae',
              data: [651]

          }, {
              name: 'Amazon',
              data: [542]

          }, {
              name: 'Starbucks',
              data: [378]

          }

        ]
      });
}



Template.otherChart.rendered = function() {
    buildContainer();
}
