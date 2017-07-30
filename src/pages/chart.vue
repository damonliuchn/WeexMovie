<template>
    <div id="app">
        <!--<schart :canvasId="canvasId"-->
                <!--:type="type"-->
                <!--:width="width"-->
                <!--:height="height"-->
                <!--:data="dataq"-->
                <!--:options="options"-->
        <!--&gt;</schart>-->
        <line-example :chart-data="datacollection"></line-example>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import jquery from 'jquery';
import {getUserListPage2} from '../api/api'
import axios from 'axios';
import Vue from 'vue'
import LineExample from '../components/LineChart.js'
export default {
	data() {
		return {
			canvasId: 'myCanvas',
			type: 'line',
			width: 500,
			height: 400,
			dataq: [
//				{name: '2014', value: 1342},
//				{name: '2015', value: 2123},
//				{name: '2016', value: 1654},
//				{name: '2017', value: 1795},
			],
            dataw: {
                     labels: [],
                     datasets: [
                         {
                             label: 'Data One',
                             backgroundColor: '#05CBE1',
                             data: []
                         }
                         ]
              },
			options: {
				title: 'Total sales of stores in recent years',
                yEqual: 1
			},
            webContent:'',
            datacollection:null,
            datasetsdata:[],
            labels: []
		}
	},
    created () {
	    //this.dataq.push({name: '2018', value: 1795});

    },
    mounted () {
        //this.fillData();
        var url = "http://fund.eastmoney.com/110011.html?spm=search"
        this.$http.get('http://localhost:10004/forward_get?url='+url)
            .then(response => {
                    this.webContent = response.body;
                    //find(this.webContent,"/<table>.*?<\/table>/g")
                    var thisVue = this;
                    jquery(this.webContent)
                    .find('table')
                    .each(function(index, domEle){
                            if(index == 7){
                                console.log(index + ":" + domEle);
                                for(var i = 1;i<domEle.rows.length;i++)
                                {
                                    var value =1;
                                    var values = domEle.rows[i].cells[3].innerHTML
                                        .replace('<span class="ui-color-green">','')
                                        .replace('<span class="ui-color-red">','')
                                        .replace('%</span>  ','');
                                    console.log("ddddddddd2:" + domEle.rows[i].cells[2].innerHTML);
                                    console.log("ddddddddd3:" + domEle.rows[i].cells[0].innerHTML);
//                                    jquery(domEle.rows[i].cells[3].innerHTML)
//                                        .find('span')
//                                        .each(function(index, domEle){
//                                            value = 1;
//                                            console.log("ddddddddd1:" + domEle.innerHTML);
//                                        });
                                    thisVue.addData(domEle.rows[i].cells[0].innerHTML,domEle.rows[i].cells[2].innerHTML)
                                }
                                thisVue.fillData();
                            }
                        }
                    );
//                    console.log("over");
                }, response => {
                    console.log("ddddddddd3:")
                }
            );
    },
    components:{
		Schart,LineExample
	},
    methods:{
        addData(name,value) {
            this.dataq.push({name: name, value: value});
            this.dataw.datasets[0].data.push(value);
            this.dataw.labels.push(name);
//            var labels = [];
//            labels.push(name);
//            var dataset = [];
//            dataset.push(value);
            //fillData(dataset,labels);
        },
        fillData () {
            this.datacollection = {
                labels: this.dataw.labels.reverse(),
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#ffffff',
                        data: this.dataw.datasets[0].data.reverse()
                    }
                ]
            }
        },
        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    },
}

</script>