/*
 * Function to draw the area chart
 */
function built3d() {

    $('#container-3d').highcharts({

      chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Impressions by tweet times in relation to total impressions since August 3rd, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Impressions Share',
            data: [
                ['7pm',   3.9],
                ['8pm',   2.2],
                {
                    name: '9pm',
                    y: 3.8,
                    sliced: true,
                    selected: true
                },
                ['10pm',    1.8],
                ['11pm',     1.1],

                ['12am',   0.8],
                ['1am',    0.14],
                ['2am',     0.6],


                ['8am',     1.2],
                ['9am',   5.9],
                ['10am',    9.7],
                ['11am',     11.2],

                ['12pm',   9.7],
                ['1pm',    8.6],
                ['2pm',     9.0],
                ['3pm',   10.4],

                ['4pm',    8.4],
                ['5pm',     6.6],
                ['6pm',   5.5]
            ]
        }]
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
Template.ThreedDemo.rendered = function() {
    built3d();
}
