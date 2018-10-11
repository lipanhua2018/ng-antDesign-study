import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }

  public pageData = {
      pageName: '列表页',
      colorList: [{
        color: 'red',
        ch: '红色'
      },
      {
        color: 'orange',
        ch: '橙色'
      },{
        color: 'yellow',
        ch: '黄色'
      },{
        color: 'green',
        ch: '绿色'
      },{
        color: 'cyan',
        ch: '青色'
      },{
        color: 'blue',
        ch: '蓝色'
      },{
        color: 'purple',
        ch: '紫色'
      }]
  }

  ngOnInit() {
  }

}
