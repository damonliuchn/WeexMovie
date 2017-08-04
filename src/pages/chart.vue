<template>
    <div class="echarts">
        <ECharts :options="bar" ref="bar"  theme="macarons"></ECharts>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/chart/map'
    import 'echarts/lib/chart/radar'
    import 'echarts/lib/chart/scatter'
    import 'echarts/lib/chart/effectScatter'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/polar'
    import 'echarts/lib/component/geo'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/visualMap'
    import 'echarts/theme/macarons.js'

    import jquery from 'jquery';
    var option = {
        title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: '最高气温',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '最低气温',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data : [
                        {name: '标注1', value: 100, xAxis: 1, yAxis: 20}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    export default {
        data() {
            return {
                xxData: [],
                yyData: [],
                loading: true,
                aaaa: option,
                bar: {
                    title: {
                        text: '基金估值曲线'
                    },
                    tooltip: {},
                    xAxis: {
                        data: []
                    },
                    yAxis: {
                        min: 3.5,
                        max: 3.8
                    },
                    series: [{
                        name: '估值',
                        type: 'line',
                        data: [],
                        markPoint: {
                            data : [
                                {name: '最新值', value: 0, xAxis: "", yAxis: 0}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }]
                }
            }
        },
        created () {

        },
        mounted () {//110011
            var id = this.$route.params.id;
            if (!id) {
                id = "110011"
            }
            var url = "http://fund.eastmoney.com/" + id + ".html?spm=search"
            this.$http.get('http://' + window.document.location.host + '/forward_get?url=' + url)
                .then(response => {
                        this.webContent = response.body;
                        var thisVue = this;
                        //查询历史净值
                        jquery(this.webContent)
                            .find('.ui-table-hover')
                            .each(function (index, domEle) {
                                    if (index == 2) {
                                        //console.log(index + ":" + domEle.innerHTML);
                                        for (var i = 1; i < domEle.rows.length; i++) {
                                            console.log(domEle.rows[i].cells[2].innerHTML)
                                            thisVue.addData(domEle.rows[i].cells[0].innerHTML, domEle.rows[i].cells[2].innerHTML)
                                        }
                                    }
                                }
                            );
                        //查询最新估值
                        var guzhi;
                        jquery(this.webContent)
                            .find('.floatleft.fundZdf')
                            .each(function (index, domEle) {
                                    console.log("ddddddddd5:" + domEle.innerHTML)
                                    guzhi = thisVue.find(domEle.innerHTML, />[\s\S]*?</, 1, 1)
                                    console.log("ddddddddd4:" + guzhi)
                                }
                            );
                        //查询最新估值时间
                        var guzhiTime;
                        jquery(this.webContent)
                            .find('#gz_gztime')
                            .each(function (index, domEle) {
                                    guzhiTime = domEle.innerHTML.substring(4, 9);
                                    console.log("ddddddddd3:" + guzhiTime)
                                }
                            );
                        this.addEstimateData(guzhiTime, guzhi)
                        this.fillData();
                    }, response => {
                        console.log("ddddddddd3:")
                    }
                );
        },
        components: {
            //IEcharts,
            ECharts
        },
        methods: {
            clearData() {
                this.yyData = [];
                this.xxData = [];
            },
            addData(name, value) {
                this.yyData.push(value)
                this.xxData.push(name)
            },
            addEstimateData(name, value) {
                var last = this.xxData[0];
                if (last != name) {
                    var lastValue = this.yyData[0];
                    var fuhao = value.substring(0, 1);
                    var tempValue = value.substring(1);
                    var trueValue;
                    if (fuhao == '+') {
                        trueValue = parseFloat(lastValue) + parseFloat(tempValue);
                    } else {
                        trueValue = parseFloat(lastValue) - parseFloat(tempValue);
                    }
                    this.yyData.unshift(trueValue.toString())
                    this.xxData.unshift(name)
                }
            },
            fillData () {
                this.updateYAxis();
                this.bar.series[0].data = this.yyData.reverse()
                this.bar.xAxis.data = this.xxData.reverse()

                var value = parseFloat(this.yyData[this.yyData.length-1])
                this.bar.series[0].markPoint.data[0].value = value
                this.bar.series[0].markPoint.data[0].yAxis = value
                this.bar.series[0].markPoint.data[0].xAxis = this.xxData[this.xxData.length-1]
                this.loading = false
            },
            onReady(instance) {
                console.log(instance);
            },
            updateYAxis() {
                var min = parseFloat(this.yyData[0]);
                var max = parseFloat(this.yyData[0]);
                for (var i=0;i<this.yyData.length;i++)
                {
                    if(min>parseFloat(this.yyData[i])){
                        min = parseFloat(this.yyData[i]);
                    }
                    if(max<parseFloat(this.yyData[i])){
                        max = parseFloat(this.yyData[i]);
                    }
                }
                var padding = (max - min)/6;
                this.bar.yAxis.min = min-padding;
                this.bar.yAxis.max = max+padding;
            },
            find(source, regExp, start, end) {
                try {
                    var find = source.match(regExp)[0];
                    return find.substring(start, find.length - end);
                }
                catch (e) {
                    return "";
                }
            }
        },
    }

</script>

<style scoped>
    .echarts {
        width: 800px;
        height: 400px;
    }
</style>