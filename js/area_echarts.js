
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
var scatterData = [{
            "name": "南宁市",
            "value": [
            108.320004,
            22.82402,
            100
            ]
        },
        {
            "name": "柳州市",
            "value": [
            109.411703,
            24.314617,
            100
            ]
        },
        {
            "name": "桂林市",
            "value": [
            110.299121,
            25.274215,
            100,
            ]
        },
        {
            "name": "梧州市",
            "value": [
            111.297604,
            23.474803,
            100
            ]
        },
        {
            "name": "北海市",
            "value": [
            109.119254,
            21.473343,
            100
            ]
        },
        {
            "name": "防城港市",
            "value": [
            108.045478,
            21.614631,
            100
            ]
        },
        {
            "name": "钦州市",
            "value": [
            108.624175,
            21.967127,
            100
            ]
        },
        {
            "name": "贵港市",
            "value": [
            109.602146,
            22.8036,
            100
            ]
        },
        {
            "name": "玉林市",
            "value": [
            110.054393,
            22.03136,
            100
            ]
        },
        {
            "name": "百色市",
            "value": [
            106.616285,
            23.897742,
            100
            ]
        },
        {
            "name": "贺州市",
            "value": [
            111.052056,
            24.014141,
            100
            ]
        },
        {
            "name": "河池市",
            "value": [
            108.062105,
            24.295899,
            100
            ]
        },
        {
            "name": "来宾市",
            "value": [
            109.029772,
            23.333766,
            100
            ],
            
        },
        {
            "name": "崇左市",
            "value": [
            107.353926,
            22.404108,
            100
            ]
        }
        ];


option = {
	
  geo3D:[{
  	type: 'map3D',
  	map: '广西',
  	itemStyle: {
      areaColor:'#1b44e4',
      borderColor: '#808080',
      borderWidth: 1,
  	},
     
  }],

  series: [
  {
  	type: 'scatter3D',
  	coordinateSystem: 'geo3D',
  	data: scatterData,
  	symbol: 'pin',
  	symbolSize: 30,
  	itemStyle:{
  		color:'red',
  		borderColor:'#fff',
  		borderWidth:1,
  	},
  
  	label:{
  		show:true,
  		formatter:'{b}',
  		position:'bottom',
  		textStyle:{
  			color:'#fff',
  			backgroundColor: 'transparent'
  		}
  	}
  }],

};
// myChart.getZr().on('click', function (params) {
//         console.log(params)

//        var name=params.name;
//                     if(name=="来宾市"){
//                         window.location.href="http://localhost:8080/ZZ/index.html";
//                     }   

//     });
	
               
        myChart.setOption(option);
        myChart.on('click', function (clickparams) {
        if (clickparams.name=='来宾市') {
          location.href = 'http://localhost:8080/ZZ/index.html';
        }
        
    });

        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

