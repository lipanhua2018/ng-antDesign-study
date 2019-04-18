import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokenLine',
  templateUrl: './brokenLine.component.html',
  styleUrls: ['./brokenLine.component.less']
})
export class BrokenLineComponent implements OnInit {

  constructor() { }

  public chartOption = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{  // 系列列表。每个系列通过 type 决定自己的图表类型
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1, color: '#cfecfb' // 10% 处的颜色
                }, {
                    offset: 0, color: '#66ccff' // 0% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        color: ['#0f9ce3']
    },
    // {
    //     data: [980, 892,825, 750, 860, 905, 1086],
    //     type: 'line',
    //     color: ['#ef9323'],
    //     areaStyle: {
    //         color: {
    //             type: 'linear',
    //             x: 0,
    //             y: 0,
    //             x2: 0,
    //             y2: 1,
    //             colorStops: [{
    //                 offset: 1, color: '#ffe9cf' // 100% 处的颜色
    //             }, {
    //                 offset: 0, color: '#faaa48' // 0% 处的颜色
    //             }],
    //             globalCoord: false
    //         }
    //     }
    // }
]
};



  ngOnInit() {
  }

}
