$(function () {
    $('#container2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Total Tweet Count by Time'
        },
        subtitle: {
            text: 'Both time periods are of equal length'
        },
        xAxis: {
            categories: ['12AM','1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM','11PM']
        },
        yAxis: {
            title: {
                text: 'Tweet Count'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'After Aug 3rd, 2015',
            data: [8, 2, 1,0,0,0,0,0,14, 77, 141,155, 118, 122, 126, 138, 116, 95, 84, 49, 24, 35, 19, 14]
        },{
            name: 'Before Aug 3rd, 2015',
            data: [11, 7, 0, 1, 0, 5, 1, 13, 18, 54, 56, 53, 47, 66, 77, 60,58, 41, 26, 40,33,36,25,15,11]
        }
      ]
    });
});
