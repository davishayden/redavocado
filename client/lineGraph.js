$(function () {
    $('#container1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Total Impressions by when Tweet was sent'
        },
        subtitle: {
            text: 'Both time periods are of equal length'
        },
        xAxis: {
            categories: ['12AM','1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM','11PM',]
        },
        yAxis: {
            title: {
                text: 'Impressions'
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
            data: [37421, 6362, 2988, 0,0,0,0,0,55031, 269022, 438651, 501463, 412352, 389082, 405888, 470521, 381092, 297979, 247292, 176143, 96954, 172736, 83629, 50102]
        }, {
            name: 'Before Aug 3rd, 2015',
            data: [25866, 14054, 0, 2626,0,15028,2830,48671,90375, 191938, 175274, 175761, 139134, 333262, 266981, 239445, 207517, 131442, 82716, 130387, 115457, 118035, 82420, 41436]
        }]
    });
});
