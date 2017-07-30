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
            loading: false,
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
                    jquery(this.webContent)
                    .find('table')
                    .each(function(index, domEle){
                            if(index == 7){
                                console.log(index + ":" + domEle);
                                for(var i = 1;i<domEle.rows.length;i++)
                                {
                                    console.log("ddddddddd2:" + domEle.rows[i].cells[2].innerHTML);
                                    console.log("ddddddddd3:" + domEle.rows[i].cells[0].innerHTML);
                                    thisVue.addData(domEle.rows[i].cells[0].innerHTML,domEle.rows[i].cells[2].innerHTML)
                                }
                                thisVue.fillData();
                            }
                        }
                    );
                }, response => {
                    console.log("ddddddddd3:")
                }
            );
    },
    components:{
		IEcharts
	},
    methods:{
        addData(name,value) {
            this.xData.push(value)
            this.yData.push(name)
        },
        fillData () {
            this.bar.series[0].data = this.xData.reverse()
            this.bar.xAxis.data = this.yData.reverse()
        },
        onReady(instance) {
            console.log(instance);
        },
        onClick(event, instance, echarts) {
            console.log("ddd");
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