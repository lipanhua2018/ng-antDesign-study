import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-project';

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  public pageData = {
      openMap: {
        sub1: true,
        sub2: false,
        sub3: false
      }
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
}
