import { Component, TemplateRef, ViewChild,  OnInit } from '@angular/core';
import { RouteService } from './components/provider/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private route: RouteService) {
  }

  public pageData = {
      openMap: {
        sub1: true,
        sub2: false,
        sub3: false
      },
      task: [
        {task: 'angular study', time: '2018/11/06 20:20:30', length: 'two hour'},
        {task: 'english study', time: '2018/11/06 20:00:30', length: 'one hour'},
        {task: 'javascript study', time: '2018/11/07 09:15:00', length: 'four hour'}
      ]
  };
  ngOnInit() {
    (function setFontSize(desW) {
        const winW = document.documentElement.clientWidth;
        const scale = desW / 100;
        // console.log(scale);
        if (winW > desW) {  /*检测屏幕宽度是否大于设计效果图*/
            document.documentElement.style.fontSize = '100px';
        } else {
            document.documentElement.style.fontSize = winW / scale + 'px';
        }
    })(1920);
    // console.log(RouteService, this.route);
  }
  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
      this.triggerTemplate = this.customTrigger;
  }

  openHandler(value: string): void {  // 侧边栏导航只打开当前项的下拉
    for (const key in this.pageData.openMap) {
      if (key !== value) {
        this.pageData.openMap[ key ] = false;
      }
    }
  }

  goworkpage () {
    this.route.goPage('workpage');
  }

  gotaskPage () {
    this.route.goPage('taskpage', {task: this.pageData.task});
  }
}
