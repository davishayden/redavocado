
function buildContainer() {
  $('#container').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Engagement Rate Per Tweet'
      },
      xAxis: {
          categories: [
              '@GVSULakers'
          ]
      },
      yAxis: [{
          min: 0,
          title: {
              text: '%'
          }
      }, {
          title: {
              text: ''
          },
          opposite: true
      }],
      legend: {
          shadow: false
      },
      tooltip: {
          shared: true
      },
      plotOptions: {
          column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Courtney',
          color: 'rgba(165,170,217,1)',
          data: [3.68],
          tooltip: {
            valueSuffix: '%'
          },
          pointPadding: 0.3,
          pointPlacement: -0.2
      }, {
          name: 'Other',
          color: 'rgba(248,161,63,1)',
          data: [2.85],
          tooltip: {
              valuePrefix: '',
              valueSuffix: '%'
          },
          pointPadding: 0.3,
          pointPlacement: 0.2,
          yAxis: 1
      }]
  });
}

Template.engRate.rendered = function() {
    buildContainer();
}
