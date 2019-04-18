import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pieChart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.less']
})
export class PieChartComponent implements OnInit {

  constructor() { }
@Input() pieData: any;   // 接收父组件传递过来的数据

    public chartOption = {
    title : {
        text: '',
        textStyle: {
            fontSize: 14
        },
        subtext: '',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [],
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
            color: '#666'
        }
    },
    series : [
        {
            name: '收益分类',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [],
            // label: {
            //     fontSize: 0,
            //     fontWeight: 'bold'
            // },
            labelLine: {    // 视觉指引线配置
                show: false
            },
            tooltip: {
                textStyle: {
                    fontSize: 12
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
    color: ['#f9747d', '#55a1ff', '#f6b952', '#71a0fe', '#4ddac7']
};

    ngOnInit() {
        this.initChartData();
    }

    private initChartData () {  // 初始化图例数据
        this.chartOption.series[0].data = this.pieData.data;
        this.pieData.data.map((item) => {
            this.chartOption.legend.data.push(item.name);
        });
        this.chartOption.title.text = this.pieData.title;
        this.chartOption.title.subtext = this.pieData.subtext;
    }
}
