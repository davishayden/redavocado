//import Highcharts from 'highcharts';
$(function () {

    $('#container3').highcharts({

        chart: {
            polar: true,
            type: 'area'
        },

        title: {
            text: 'Period Comparison',
            x: -80
        },

        pane: {
            size: '90%'
        },

        xAxis: {
            categories: ['Impressions (100s)', 'Engagements', 'Media Engagements'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Period 1',
            data: [18387.23, 76390, 33041],
            pointPlacement: 'on'
        }, {
            name: 'Period 2',
            data: [12214.68, 57632, 31129],
            pointPlacement: 'on'
        }, {
            name: 'Period 3',
            data: [14345.17, 54754, 26661],
            pointPlacement: 'on'
        }]

    });
});
