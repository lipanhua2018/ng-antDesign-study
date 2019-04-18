import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ringChart',
  templateUrl: './ringChart.component.html',
  styleUrls: ['./ringChart.component.less']
})
export class RingChartComponent implements OnInit {

@Input() ringChart: any; // 接收数据

  constructor() { }
  public chartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  // legend: {
  //     orient: 'vertical',
  //     x: 'left',
  //     data:['直接访问','搜索引擎']
  // },
  series: [
      {
          name: '',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '10'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data: [],
          color: ['#eeeeee', '#e1574c']
      }
  ],
  color: ['#eeeeee', '#55a1ff']
  };
  ngOnInit() {
      this.chartOption.series[0].data = this.ringChart.data;
      this.chartOption.series[0].name = this.ringChart.name;
      this.chartOption.series[0].color = this.ringChart.color;
  }

  public chartInitFn(echart) {
        // console.log(echart);
  }

}
