import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-easingChart',
    templateUrl: './easingChart.component.html',
    styleUrls: ['./easingChart.component.less']
})
export class EasingChartComponent implements OnInit {

    constructor() { }

    public chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901],
          type: 'line',
          smooth: true
      }]
    };
    ngOnInit() {

    }

}
