function buildContainer2() {
    $('#container2RideShareRelative').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Ridesharing Company Mentions by % of Company Total Mentions '
        },
        subtitle: {
            text: '1,000,000 transactions'
        },
        xAxis: {
            categories: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']
        },
        yAxis: {
            title: {
                text: 'Mentions'
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
            name: 'Uber',
            data: [
                5.11,
                5.58,
                5.41,
                5.47,
                3.85,
                4.58,
                3.61,
                2.64,
                1.81,
                1.57,
                0.77,
                1.16,
                1.61,
                3.24,
                4.52,
                6.50,
                5.97,
                5.82,
                5.86,
                5.41,
                4.57,
                4.54,
                5.02,
                5.36

            ]
        }, {
            name: 'Lyft',
            data: [
                4.81,
                6.27,
                4.62,
                5.52,
                4.50,
                5.17,
                4.54,
                3.08,
                2.13,
                1.50,
                1.14,
                0.75,
                1.46,
                3.08,
                3.94,
                4.97,
                5.25,
                5.56,
                5.92,
                4.06,
                5.52,
                5.84,
                5.17,
                5.21


            ]
        }, {
            name: 'Taxi & Cab',
            data: [
                5.64,
                5.55,
                5.46,
                6.13,
                4.93,
                5.55,
                5.33,
                3.69,
                1.78,
                1.51,
                1.33,
                0.84,
                2.00,
                3.38,
                5.60,
                5.51,
                4.89,
                4.40,
                5.15,
                4.58,
                3.91,
                3.82,
                4.04,
                4.98
            ]
        }]
    });
}
Template.rideShareTimeRelative.rendered = function() {
    buildContainer2();
}
