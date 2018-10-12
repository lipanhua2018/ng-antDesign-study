import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barChart',
  templateUrl: './barChart.component.html',
  styleUrls: ['./barChart.component.less']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public chartOption = {
    title : {
        text: '地产周报',
        textStyle: {
            fontSize: 14
        },
        subtext: '',
        x:'left'
    },
    legend: {
        data: ['华夏地产'],
        align: 'left'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'华夏地产',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
}

  ngOnInit() {
  }

}
