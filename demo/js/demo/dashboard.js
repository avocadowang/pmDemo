
// Dashboard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(window).on('load', function() {



    // Network chart ( Morris Line Chart )
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================

    var day_data = [
        {"elapsed": "10-12", "value": 24, b:2},
        {"elapsed": "10-13", "value": 34, b:2},
        {"elapsed": "10-14", "value": 33, b:7},
        {"elapsed": "10-15", "value": 22, b:6},
        {"elapsed": "10-16", "value": 28, b:7},
        {"elapsed": "10-17", "value": 20, b:1},
        {"elapsed": "10-18", "value": 10, b:7},
        {"elapsed": "10-19", "value": 20, b:7},
        {"elapsed": "10-20", "value": 17, b:1},
        {"elapsed": "10-21", "value": 21, b: 1},
        {"elapsed": "10-22", "value": 16, b: 8},
        {"elapsed": "10-23", "value": 13, b: 2},
        {"elapsed": "10-24", "value": 13, b: 2},
        {"elapsed": "10-25", "value": 14, b:1},
        {"elapsed": "10-26", "value": 8, b:2},
        {"elapsed": "10-27", "value": 10, b:7},
        {"elapsed": "10-28", "value": 10, b:6},
        {"elapsed": "10-29", "value": 15, b:1},
        {"elapsed": "10-30", "value": 11, b:5},
        {"elapsed": "10-31", "value": 12, b:1},
        {"elapsed": "12-01", "value": 17, b:7},
        {"elapsed": "12-02", "value": 6, b:8},
        {"elapsed": "12-03", "value": 7, b: 8},
        {"elapsed": "12-04", "value": 7, b: 1},
        {"elapsed": "12-05", "value": 7, b: 9},
        {"elapsed": "12-06", "value": 9, b: 3},
        {"elapsed": "12-07", "value": 13, b:2},
        {"elapsed": "12-08", "value": 15, b:2},
        {"elapsed": "12-09", "value": 12, b:7},
        {"elapsed": "12-10", "value": 10, b:6},
        {"elapsed": "12-11", "value": 13, b:7},
        {"elapsed": "12-12", "value": 10, b:5},
        {"elapsed": "12-13", "value": 6, b:7},
        {"elapsed": "12-14", "value": 7, b:7},
        {"elapsed": "12-15", "value": 6, b:8},
        {"elapsed": "12-16", "value": 8, b: 1},
        {"elapsed": "12-17", "value": 8, b: 1},
        {"elapsed": "12-18", "value": 11, b: 2},
        {"elapsed": "12-19", "value": 10, b: 2},
        {"elapsed": "12-20", "value": 14, b:10},
        {"elapsed": "12-21", "value": 8, b:2},
        {"elapsed": "12-22", "value": 19, b:7},
        {"elapsed": "12-23", "value": 10, b:6},
        {"elapsed": "12-24", "value": 10, b:7},
        {"elapsed": "12-25", "value": 11, b:5},
        {"elapsed": "12-26", "value": 10, b:7},
        {"elapsed": "12-27", "value": 10, b:7},
        {"elapsed": "12-28", "value": 6, b:1},
        {"elapsed": "12-29", "value": 6, b: 1},
        {"elapsed": "12-30", "value": 7, b: 1},
        {"elapsed": "1-01", "value": 7, b: 2},
        {"elapsed": "1-02", "value": 4, b: 1},
        {"elapsed": "1-03", "value": 7, b: 2}
    ];

    var chart = Morris.Area({
        element : 'morris-chart-network',
        data: day_data,
        axes:false,
        xkey: 'elapsed',
        ykeys: ['value', 'b'],
        labels: ['已完成','进行中'],
        yLabelFormat :function (y) { return y.toString() + ' 个'; },
        gridEnabled: false,
        gridLineColor: 'transparent',
        lineColors: ['#82c4f8','#0d92fc'],
        lineWidth:[0,0],
        pointSize:[0,0],
        fillOpacity: 1,
        gridTextColor:'#999',
        parseTime: false,
        resize:true,
        behaveLikeLine : true,
        hideHover: 'auto'
    });





    // HDD USAGE - SPARKLINE LINE AREA CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var hddSparkline = function() {
        $("#demo-sparkline-area").sparkline([2,3,3,2,1,3,4,3,1,1,2,3,2,4,1,3], {
            type: 'line',
            width: '100%',
            height: '20',
            FontSize:'100',
            spotRadius: 5,
            lineWidth: 1.5,
            lineColor:'rgba(255,255,255,.85)',
            fillColor: 'rgba(0,0,0,0.03)',
            spotColor: 'rgba(255,255,255,.5)',
            minSpotColor: 'rgba(255,255,255,.5)',
            maxSpotColor: 'rgba(255,255,255,.5)',
            highlightLineColor : '#ffffff',//线颜色
            highlightSpotColor: '#ffffff',//点颜色
            tooltipChartTitle: '未完成',
            tooltipSuffix:' 个'

        });
    }




    // EARNING - SPARKLINE LINE CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================
    var earningSparkline = function(){
        $("#demo-sparkline-line").sparkline([2,3,3,2,1,3,4,3,1,1,2,3,2,4,1,3], {
            type: 'line',
            width: '100%',
            height: '40',//图表占区高
            spotRadius: 4,
            lineWidth:1,
            lineColor:'#ffffff',
            fillColor: false,
            minSpotColor :false,
            maxSpotColor : false,
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: '未完成',
            tooltipSuffix:' 个',
            spotColor:'#ffffff',
            valueSpots : {
                '0:': '#ffffff'
            }
        });
    }

    var earningSparkline2 = function(){
        $("#demo-sparkline-line2").sparkline([2,3,3,2,1,3,4,3,1,1,2,3,2,4,1,3], {
            type: 'line',
            width: '100%',
            height: '40',
            spotRadius: 4,
            lineWidth:1,
            lineColor:'#ffffff',
            fillColor: false,
            minSpotColor :false,
            maxSpotColor : false,
            highlightLineColor : '#ffffff',
            highlightSpotColor: '#ffffff',
            tooltipChartTitle: '未完成',
            tooltipSuffix:' 个',
            spotColor:'#ffffff',
            valueSpots : {
                '0:': '#ffffff'
            }
        });
    }

    // SALES - SPARKLINE BAR CHART
    // =================================================================
    // Require sparkline
    // -----------------------------------------------------------------
    // http://omnipotent.net/jquery.sparkline/#s-about
    // =================================================================

    var barEl = $("#demo-sparkline-bar");
    var barValues = [40,32,65,53,62,55,24,67,45,70,45,56,34,67,76,32,65,53,62,55,24,67,45,70,45,56,70,45,56,34,67,76,32,65,53,62,55];
    var barValueCount = barValues.length;
    var barSpacing = 1;	
    var salesSparkline = function(){
         barEl.sparkline(barValues, {
            type: 'bar',
            height: 55,
            barWidth: Math.round((barEl.parent().width() - ( barValueCount - 1 ) * barSpacing ) / barValueCount),
            barSpacing: barSpacing,
            zeroAxis: false,
            tooltipChartTitle: 'Daily Sales',
            tooltipSuffix: ' Sales',
            barColor: 'rgba(255,255,255,.7)'
        });
    }


    $(window).on('resizeEnd', function(){
        hddSparkline();
        earningSparkline();
        earningSparkline2();
        salesSparkline();
    })
    hddSparkline();
    earningSparkline();
    earningSparkline2();
    salesSparkline();





    // PANEL OVERLAY
    // =================================================================
    // Require Nifty js
    // -----------------------------------------------------------------
    // http://www.themeon.net
    // =================================================================
    $('#demo-panel-network-refresh').niftyOverlay().on('click', function(){
        var $el = $(this), relTime;

        $el.niftyOverlay('show');


        relTime = setInterval(function(){
            $el.niftyOverlay('hide');
            clearInterval(relTime);
        },2000);
    });








    // WELCOME NOTIFICATIONS
    // =================================================================
    // Require Admin Core Javascript
    // =================================================================
//  $.niftyNoty({
//      type: 'dark',
//      title: '赵鹏,您好',
//      message: 'You will notice that you now have an admin menu<br> that appears on the right hand side.',
//      container: 'floating',
//      timer: 5000
//  });

});
