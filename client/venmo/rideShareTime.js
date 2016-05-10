function buildContainer2() {
    $('#container2RideShare').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Total Ridesharing Mentions by Hour'
        },
        subtitle: {
            text: '1,000,000 transactions'
        },
        xAxis: {
          /*  categories: ['12AM','1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM','11PM']*/
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
            data: [614,671,651,658,463,551,434,318,218,189,92,139,194,389,544,781,718,700,705,651,550,546,604,644]
        },{
            name: 'Lyft',
            data: [122,159,117,140,114,131,115,78,54,38,29,19,37,78,100,126,133,141,150,103,140,148,131,132]
        }, {
            name: 'Taxi & Cab',
            data: [127,125,123,138,111,125,120,83,40,34,30,19,45,76,126,124,110,99,116,103,88,86,91,112]
          }]
        });
}
Template.rideShareTime.rendered = function() {
    buildContainer2();
}
