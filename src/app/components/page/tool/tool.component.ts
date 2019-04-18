import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.less']
})
export class ToolComponent implements OnInit {

  constructor() { }

  public pageData = {
          pageName: '工具页',
          toolList: [{
              web: 'javascript',
              dom: 'div'
          },
          {
            web: 'angular',
            dom: 'span'
          },
          {
            web: 'react',
            dom: 'header'
          },
          {
            web: 'vue',
            dom: 'body'
          },
          {
            web: 'jQuery',
            dom: 'footer'
          }]
  };

  ngOnInit() {
  }

}
