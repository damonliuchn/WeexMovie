<template>
    <div class="echarts">
        <IEcharts :option="bar" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
    </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue';
import jquery from 'jquery';
export default {
	data() {
		return {
		    yData:[],
            xData:[],
            loading: true,
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
                    name: 'Sales',
                    type: 'line',
                    data: []
                }]
            }
		}
	},
    created () {

    },
    mounted () {
        var url = "http://fund.eastmoney.com/110011.html?spm=search"
        this.$http.get('http://localhost:10004/forward_get?url='+url)
            .then(response => {
                    this.webContent = response.body;
                    var thisVue = this;
                    //查询历史净值
                    jquery(this.webContent)
                    .find('table')
                    .each(function(index, domEle){
                            if(index == 7){
                                console.log(index + ":" + domEle);
                                for(var i = 1;i<domEle.rows.length;i++)
                                {
                                    thisVue.addData(domEle.rows[i].cells[0].innerHTML,domEle.rows[i].cells[2].innerHTML)
                                }
                            }
                        }
                    );
                    //查询最新估值
                    var guzhi;
                    jquery(this.webContent)
                        .find('.floatleft.fundZdf')
                        .each(function(index, domEle){
                            console.log("ddddddddd5:"+domEle.innerHTML)
                            guzhi = thisVue.find(domEle.innerHTML,/>[\s\S]*?</, 1, 1)
                                console.log("ddddddddd4:"+guzhi)
                            }
                        );
                    //查询最新估值时间
                    var guzhiTime;
                    jquery(this.webContent)
                        .find('#gz_gztime')
                        .each(function(index, domEle){
                             guzhiTime = domEle.innerHTML.substring(4,9);
                            console.log("ddddddddd3:"+guzhiTime)
                            }
                        );
                    this.addEstimateData(guzhiTime,guzhi)
                    this.fillData();
                }, response => {
                    console.log("ddddddddd3:")
                }
            );
    },
    components:{
		IEcharts
	},
    methods:{
        clearData() {
            this.xData = [];
            this.yData = [];
        },
        addData(name,value) {
            this.xData.push(value)
            this.yData.push(name)
        },
        addEstimateData(name,value) {
            var last = this.yData[0];
            if(last != name){
                var lastValue = this.xData[0];
                var fuhao = value.substring(0,1);
                var tempValue = value.substring(1);
                var trueValue;
                if(fuhao == '+'){
                    trueValue = parseFloat(lastValue) + parseFloat(tempValue);
                }else{
                    trueValue = parseFloat(lastValue) - parseFloat(tempValue);
                }
                this.xData.unshift(trueValue)
                this.yData.unshift(name)
            }
        },
        fillData () {
            this.bar.series[0].data = this.xData.reverse()
            this.bar.xAxis.data = this.yData.reverse()
            this.loading = false
        },
        onReady(instance) {
            console.log(instance);
        },
        onClick(event, instance, echarts) {
            console.log("ddd");
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