function buildContainer2() {
    $('#container2Venmo').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Venmo Transaction Creations by Time'
        },
        subtitle: {
            text: '1,000,000 transactions'
        },
        xAxis: {
            categories: ['12AM','1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM','11PM']
        },
        yAxis: {
            title: {
                text: 'Transactions'
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
            name: 'Transaction Creation Count',
            data: [76370, 74661, 71418,63337,47274,37802,24968,14995,8460, 5091, 4283,7076, 13765, 24378, 36985, 49103, 46123, 50781, 51880, 52736, 52013, 51205, 62749, 72547]
        }
      ]
    });
}

Template.timeChart.rendered = function() {
    buildContainer2();
}
