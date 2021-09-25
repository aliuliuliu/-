//柱状图模块1
(function () {
    //1.实例化对象
    var myEcharts = echarts.init(document.querySelector(".bar .chart"));
    //2.指定配置项数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表大小
        grid: {
            left: '0',
            top: '10px',
            right: '0',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '金融行业', '社交行业'],
            axisTick: {
                alignWithLabel: true
            },
            // 修改x刻度标签相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            },
            //不显示X坐标轴的样式
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            // 修改y刻度标签相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2
                }
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [300, 600, 900, 330, 390, 330, 220],
            //修改柱子圆角
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    //3.把配置项给实例对象
    myEcharts.setOption(option);
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();
//柱状图2
(function () {
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    //1.实例化对象
    var myEcharts = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
            top: '0%',
            left: '20%',
            right: '22%',
            bottom: '10%',
            // containLabel: true

        },
        // 不显示x轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [{
                type: 'category',
                inverse: true,
                data: ['HTML5', 'CSS3', 'javaScript', 'VUE', 'NODE'],
                //不显示y轴的线
                axisLine: {
                    show: false
                },
                //不显示 刻度
                axisTick: {
                    show: false
                },
                //把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: '#fff'
                }
            },
            {
                inverse: true,
                data: ['720', '350', '610', '793', '664'],
                //不显示y轴的线
                axisLine: {
                    show: false
                },
                //不显示 刻度
                axisTick: {
                    show: false
                },
                //把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: '#fff'
                }
            },
        ],
        series: [{
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                // 修改第一组柱子圆角
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color 可以修改柱子的颜色
                    color: function (params) {
                        // params 传进来的是柱子对象
                        // console.log(params);
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                //柱子之间的距离
                barCategoryGap: 100,
                // 柱子的宽度
                barWidth: 15,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: 'inside',
                    //文字显示格式
                    // {c} 会自动的解析为data 里面的数据
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                //柱子之间的距离
                barCategoryGap: 100,
                // 柱子的宽度
                barWidth: 21,
                data: [100, 100, 100, 100, 100, ],
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            },
        ]
    };
    //3.把配置项给实例对象
    myEcharts.setOption(option);
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();
//折线图1模块
(function () {
    var yearData = [{
            year: '2020',
            data: [
                [20, 40, 101, 134, 90, 230, 210, 230, 132, 101, 134],
                [40, 60, 33, 110, 220, 182, 191, 234, 290, 330, 310]
            ]
        },
        {
            year: '2021',
            data: [
                [40, 60, 33, 110, 220, 182, 191, 234, 290, 330, 310],
                [20, 40, 101, 134, 90, 230, 210, 230, 132, 101, 134]
            ]
        },
    ];
    //1.实例化对象
    var myEcharts = echarts.init(document.querySelector(".line .chart"));
    //2.指定配置
    var option = {
        // 通过这个color修改两条线的颜色
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //修改图例组件 文字颜色
            textStyle: {
                color: '#4c9bfd',
            },
            // 这个10%一定加引号
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            //边框颜色
            borderColor: '#012f4a',
            //包含刻度文字在内
            containLabel: true,
            //显示边框
            show: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisTick: {
                show: false //去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' //文本颜色
            },
            axisLine: {
                show: false //去除轴线
            },
            boundaryGap: false //去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false //去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' //文本颜色
            },
            axisLine: {
                show: false //去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            },

        },
        series: [{
                name: '新增粉丝',
                type: 'line',
                //可以让我们的折线显示带有弧度
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            },
        ]
    };
    //3.把配置给实例对象
    myEcharts.setOption(option)
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    });
    //5.点击切换效果
    $('.line h2').on('click', 'a', function () {
        // alert(11)
        // console.log($(this).index());
        // 点击a之后根据当前a的索引号 找到对应的yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        //需要重新渲染
        myEcharts.setOption(option)
    })
})();
//折线图2模块
(function () {
    var myEcharts = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: '0%',
            data: ['邮件营销', '联盟广告'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        },
        grid: {
            top: '30',
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            //文本颜色为rgba（） 文字大小
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                }
            },
            //x轴线的颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            //文本颜色为rgba（） 文字大小
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                }
            },
            //x轴线的颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            //修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                //单独修改 当前线条的样式
                lineStyle: {
                    color: '#0184d5',
                    width: '2'
                },
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                //设置拐点 小圆点
                symbol: 'circle',
                symbolSize: 8,
                //开始不显示拐点 鼠标经过显示
                showSymbol: false,
                //设置拐点颜色以及边框
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(211,220,107,.1)',
                    borderWidth: 12
                },
                //变得圆滑
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: '联盟广告',
                type: 'line',
                //变得圆滑
                smooth: true,
                //单独修改 当前线条的样式
                lineStyle: {
                    color: '#00d887',
                    width: '2'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                //设置拐点 小圆点
                symbol: 'circle',
                symbolSize: 8,
                //开始不显示拐点 鼠标经过显示
                showSymbol: false,
                //设置拐点颜色以及边框
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(211,220,107,.1)',
                    borderWidth: 12
                },
                data: [160, 40, 30, 100, 50, 100, 30, 260, 20, 120, 30, 345, 30, 40, 75, 40, 30, 210, 20, 200, 30, 76, 30, 40, 150, 40, 240, 60, 200, 40],
            }
        ]
    };
    myEcharts.setOption(option)
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();
//b饼图1 模块
(function () {
    //1.实例化对象
    var myEcharts = echarts.init(document.querySelector('.pie .chart'))
    //2.指定配置
    var option = {
        color: ['#056aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            // 这个radius可以修改饼形图的大小
            // radius第一值是内圆的半径 第二个外圆的半径
            radius: ['40%', '60%'],
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            // 图形上的文字
            label: {
                show: false,
                position: 'center'
            },
            //链接文字和图行的线是否显示
            labelLine: {
                show: false
            },
            data: [{
                    value: 1,
                    name: '0岁以下'
                },
                {
                    value: 4,
                    name: '20-29岁'
                },
                {
                    value: 2,
                    name: '30-39岁'
                },
                {
                    value: 1,
                    name: '40-49岁'
                },
                {
                    value: 1,
                    name: '50岁以上'
                }
            ]
        }]
    };
    //3.吧配置给实例化对象
    myEcharts.setOption(option);
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();
//饼形图2
(function () {
    var myEcharts = echarts.init(document.querySelector('.pie2 .chart'))
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '地区分部',
            type: 'pie',
            radius: [10, 70],
            center: ['50%', '50%'],
            roseType: 'radius',
            // 图像的文字标签
            label: {
                fontSize: 10,
                color: '#fff'
            },
            //链接图形和文字的线条
            labelLine: {
                // length 链接图像的线条
                length: 6,
                // length2 链接文字的线条
                length2: 8,
            },
            data: [{
                    value: 20,
                    name: '云南'
                },
                {
                    value: 26,
                    name: '北京'
                },
                {
                    value: 24,
                    name: '山东'
                },
                {
                    value: 25,
                    name: '河北'
                },
                {
                    value: 20,
                    name: '江苏'
                },
                {
                    value: 25,
                    name: '四川'
                },
                {
                    value: 30,
                    name: '河南'
                },
                {
                    value: 42,
                    name: '柘城'
                }
            ]
        }]
    };
    myEcharts.setOption(option);
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();
// 模拟飞行模块
(function () {
    var myEcharts = echarts.init(document.querySelector('.map .chart'));
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{
            name: '北京'
        }, {
            name: '上海',
            value: 95
        }],
        [{
            name: '北京'
        }, {
            name: '广州',
            value: 90
        }],
        [{
            name: '广州'
        }, {
            name: '郑州',
            value: 80
        }],
        [{
            name: '北京'
        }, {
            name: '南宁',
            value: 70
        }],
        [{
            name: '郑州'
        }, {
            name: '南昌',
            value: 60
        }],
        [{
            name: '郑州'
        }, {
            name: '拉萨',
            value: 50
        }],
        [{
            name: '郑州'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '郑州'
        }, {
            name: '包头',
            value: 30
        }],
        [{
            name: '郑州'
        }, {
            name: '重庆',
            value: 20
        }],
        [{
            name: '北京'
        }, {
            name: '常州',
            value: 10
        }]
    ];

    var SHData = [
        [{
            name: '上海'
        }, {
            name: '包头',
            value: 95
        }],
        [{
            name: '郑州'
        }, {
            name: '昆明',
            value: 90
        }],
        [{
            name: '上海'
        }, {
            name: '广州',
            value: 80
        }],
        [{
            name: '郑州'
        }, {
            name: '郑州',
            value: 70
        }],
        [{
            name: '郑州'
        }, {
            name: '长春',
            value: 60
        }],
        [{
            name: '郑州'
        }, {
            name: '重庆',
            value: 50
        }],
        [{
            name: '郑州'
        }, {
            name: '长沙',
            value: 40
        }],
        [{
            name: '郑州'
        }, {
            name: '北京',
            value: 30
        }],
        [{
            name: '郑州'
        }, {
            name: '丹东',
            value: 20
        }],
        [{
            name: '上海'
        }, {
            name: '大连',
            value: 10
        }]
    ];

    var GZData = [
        [{
            name: '广州'
        }, {
            name: '福州',
            value: 95
        }],
        [{
            name: '广州'
        }, {
            name: '太原',
            value: 90
        }],
        [{
            name: '广州'
        }, {
            name: '长春',
            value: 80
        }],
        [{
            name: '广州'
        }, {
            name: '重庆',
            value: 70
        }],
        [{
            name: '广州'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '广州'
        }, {
            name: '成都',
            value: 50
        }],
        [{
            name: '广州'
        }, {
            name: '常州',
            value: 40
        }],
        [{
            name: '广州'
        }, {
            name: '北京',
            value: 30
        }],
        [{
            name: '广州'
        }, {
            name: '北海',
            value: 20
        }],
        [{
            name: '广州'
        }, {
            name: '海口',
            value: 10
        }]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [
        ['北京', BJData],
        ['上海', SHData],
        ['广州', GZData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        //把中国地图放大了1.2倍
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            //把中国地图放大了1.2倍
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: 'rgba(20,41,87,0.6)',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#056aab'
                }
            }
        },
        series: series
    };
    myEcharts.setOption(option);
    //让我们图表跟随屏幕自动的去变化
    window.addEventListener('resize', function () {
        myEcharts.resize();
    })
})();