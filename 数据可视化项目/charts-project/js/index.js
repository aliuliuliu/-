// 监控区域模块制作
(function () {
    $(".monitor .tabs").on("click", "a", function () {
        $(this).addClass("active").siblings("a").removeClass("active")
        // console.log($(this).index());
        // 选取对应索引号的content
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
    });
    //1.先克隆marquee 里面所有的行 （row）
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows)
    })
})();
//点位部分统计模块
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    //2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            data: [{
                    value: 30,
                    name: '云南'
                },
                {
                    value: 28,
                    name: '北京'
                },
                {
                    value: 26,
                    name: '山东'
                },
                {
                    value: 24,
                    name: '河北'
                },
                {
                    value: 22,
                    name: '江苏'
                },
                {
                    value: 20,
                    name: '浙江'
                },
                {
                    value: 18,
                    name: '四川'
                },
                {
                    value: 16,
                    name: '湖北'
                }
            ],
            label: {
                fontSize: 10
            },
            labelLine:{
                length:6,
                length2:8
            }
        }]
    };
    //3.配置和数据给我们的实例化对象
    myChart.setOption(option);
})();