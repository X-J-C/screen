
$(function () {
echarts_1();
echarts_4();
echarts_2();
echarts_3();


function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
option = {
   color: ['#0769CB','#00ABBD','#36B21D','#F65C09','#925AD3','#E21F0C','#FFC417'],
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['渗压计', '钢筋应力计', '固定倾斜仪', '静力水准仪', '应变计','轴力计','土压力计'],
        textStyle: { //图例文字的样式
            color: 'rgba(255,255,255,.6)',
            fontSize: 16
         },

    },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 33, name: '渗压计'},
                {value: 31, name: '钢筋应力计'},
                {value: 24, name: '固定倾斜仪'},
                {value: 13, name: '静力水准仪'},
                {value: 15, name: '应变计'},
                {value: 13, name: '轴力计'},
                {value: 15, name: '土压力计'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

      var currentIndexLeft1 = -1;
        var ChartLeft1 = setInterval(function() {
            var dataLenLeft1 = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndexLeft1
            });
            currentIndexLeft1 = (currentIndexLeft1 + 1) % dataLenLeft1;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: currentIndexLeft1
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: currentIndexLeft1
            });
        }, 2000);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

      var xData = ["展览会", "工业区", "办公区"]
var line = ["30", "20", "10"];
var attr ={
    'name':'违规事件',
    'unit':'件'
}
// var graphicData = ["A级:1000-10000元/人",
// "B级:10000-100000元/人",
// "C级:100000-10000000元/人",
// ];
var colors = []
option = {
    
   tooltip: {
           trigger: 'item',
        padding: 1,
        formatter: function(param) {
            
            var resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" +  param.name + "</div>" +
                "<div style='padding-top:5px;'>"+
                "<span style=''> " +attr.name + ": </span>" +
                "<span style=''>" + param.value + "</span><span>" + attr.unit + "</span>"+
                "</div>" +
                "</div>";
            return resultTooltip
        }
        },
    // graphic: [{
    //     type: 'text',
    //     z: 100,
    //     right: '4%',
    //     top: '8%',
    //     style: {
    //         fill: '#81A5E8',
    //         text: graphicData.join('\n'),
    //         padding:[20,20],
    //         font: 'italic small-caps  18px/2 cursive',
            
    //     }
    // }],
    grid: {
        left: '5%',
        top: '10%',
        right: '5%',
        bottom: '10%',
    },
    legend: {
        show: true,
        icon: 'circle',
        orient: 'horizontal',
        top: '90.5%',
        right: 'center',
        itemWidth: 16.5,
        itemHeight: 6,
        // itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14
        }
    },
    xAxis: [{
        data: xData,
        axisLabel: {
            textStyle: {
                color: '#aaaaaa',
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#03202E"
            }
        }
    }],
    yAxis: [{
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 20],
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
                    "normal": {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ]),
                       

                    },

                },
            data: line
        }, 
        
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 60,
            barGap: '0%',
            itemStyle: {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }],


                        }
                    }
                },
           
            data: line
        }, 
        
        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 20],
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                         color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                    offset: 0,
                                    color: "rgba(89,211,255,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(23,237,194,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
            data: line
        }
    ]
  };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }



function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

      option = {
        color: ['#E21F0C','#0769CB','#00ABBD',],
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['展览区','生活区','办公区'],
        textStyle: { //图例文字的样式
            color: 'rgba(255,255,255,.6)',
            fontSize: 16
         },

    },
    graphic:{
        type:'text',
        left:'center',
        top:'100px',
        z:2,
        zlevel:100,
        style:{
            text:'违规事情',
            fill:'rgba(255,255,255,.6)',
            width:100,
            height:50,
        }
    },
    series: [
        {
            name:'违规事情',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                formatter:'{d}\n{b}',

            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
            {value: 335, name: '展览区'},
                {value: 310, name: '生活区'},
                {value: 234, name: '办公区'},]
        }
    ]
};

      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

       option = {
  
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    
    grid: {
        left: '10',
        top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },
    xAxis: [
        { axisLabel:  {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize:12,
                },
               
            },
        axisLine: {
            lineStyle: { 
                color: 'rgba(255,255,255,.2)'
            }

        },
            data: ['2020-11-10', '2020-11-11', '2020-11-12', '2020-11-13','2020-11-14','2020-11-15','2020-11-16' ]
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
        }
    ],
    series: [
        {
            name: '倾角计',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '位移计',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '土压力计',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


      
        

	
})



		
		
		


		









