function buildContainer2() {
    $('#container2RideSharePercent').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Ridesharing Company Mentions Percentage of Total Dataset Mentions by Hour'
        },
        subtitle: {
            text: '1,000,000 transactions'
        },
        xAxis: {
            /*categories: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']*/
            categories: ['8PM/5PM','9PM/6PM', '10PM/7PM', '11PM/8PM', '12AM/9PM', '1AM/10PM', '2AM/11PM', '3AM/12AM','4AM/1AM', '5AM/2AM', '6AM/3AM', '7AM/4AM', '8AM/5AM', '9AM/6AM', '10AM/7AM', '11AM/8AM', '12PM/9AM', '1PM/10AM', '2PM/11AM', '3PM/12PM', '4PM/1PM', '5PM/2PM', '6PM/3PM','7PM/4PM'],
            title: {
                text: 'ET/PT'
            }
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
                0.80,
                0.90,
                0.91,
                1.04,
                0.98,
                1.46,
                1.74,
                2.12,
                2.58,
                3.71,
                2.15,
                1.96,
                1.41,
                1.60,
                1.47,
                1.59,
                1.56,
                1.38,
                1.36,
                1.23,
                1.06,
                1.07,
                0.96,
                0.89

            ]
        }, {
            name: 'Lyft',
            data: [
                0.16,
                0.21,
                0.16,
                0.22,
                0.24,
                0.35,
                0.46,
                0.52,
                0.64,
                0.75,
                0.68,
                0.27,
                0.27,
                0.32,
                0.27,
                0.26,
                0.29,
                0.28,
                0.29,
                0.20,
                0.27,
                0.29,
                0.21,
                0.18


            ]
        }, {
            name: 'Taxi & Cab',
            data: [
                0.17,
                0.17,
                0.17,
                0.22,
                0.23,
                0.33,
                0.48,
                0.55,
                0.47,
                0.67,
                0.70,
                0.27,
                0.33,
                0.31,
                0.34,
                0.25,
                0.24,
                0.19,
                0.22,
                0.20,
                0.17,
                0.17,
                0.15,
                0.15
            ]
        }]
    });
}
Template.rideShareTimePercent.rendered = function() {
    buildContainer2();
}
