import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public pageData = {
      pageName: '主页',
      numList: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'],
      rankingsData: [{
        ranking: 1,
        profitType: '房地产',
        money: '98,501.88',
        percentage: '28.98%',
        color: 'red'
      },
      {
        ranking: 2,
        profitType: '广告营销',
        money: '87,397.65',
        percentage: '25.66%',
        color: 'red'
      },
      {
        ranking: 3,
        profitType: '股票投资',
        money: '77,281.95',
        percentage: '21.24%',
        color: 'yellow'
      },
      {
        ranking: 4,
        profitType: '产品销售',
        money: '55,682.28',
        percentage: '18.23%',
        color: 'red'
      },
      {
        ranking: 5,
        profitType: '海外资产',
        money: '33,466.65',
        percentage: '12.53%',
        color: 'red'
      },
      {
        ranking: 6,
        profitType: '矿产开发',
        money: '22,875.03',
        percentage: '10.56%',
        color: 'green'
      },
      {
        ranking: 7,
        profitType: '软件销售',
        money: '11,631.63',
        percentage: '9.37%',
        color: 'yellow'
      },
      {
        ranking: 8,
        profitType: '影视资产',
        money: '8,552.38',
        percentage: '6.25%',
        color: 'red'
      },
      {
        ranking: 9,
        profitType: '医药产业',
        money: '7,880.51',
        percentage: '5.63%',
        color: 'green'
      },
      {
        ranking: 10,
        profitType: '畜牧养殖',
        money: '5,160.29',
        percentage: '2.42%',
        color: 'green'
      }
    ],
    totalData: [
      {
        indexNum: 867420.00,
        indexType: '日统计'
      },
      {
        indexNum: 6071940.00,
        indexType: '周统计'
      },
      {
        indexNum: 24287760.00,
        indexType: '月统计'
      }
    ]
  }

  ngOnInit() {

  }

}
