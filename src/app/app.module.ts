import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 引入模块
import { AppRouterModule } from './app.router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';  // 引入angular的ui框架ng zorro
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgxEchartsModule } from 'ngx-echarts'; // 引入百度echarts图表插件


// 引入公共服务模块
import { RouteService } from './components/provider/route.service';
import { StorageService } from './components/provider/storage.service';
import { httpService } from './components/provider/http.service';
import { filterService } from './components/provider/filter.service'; // 过滤器服务
import { uppercaseMoney } from './components/filter/uppercaseMoney';  // 转大写金额

// 引入页面
import { AppComponent } from './app.component';
import { DataviewComponent } from './components/page/dataview/dataview.component';
import { HomeComponent } from './components/page/home/home.component';
import { ListComponent } from './components/page/list/list.component';
import { ToolComponent } from './components/page/tool/tool.component';
import { TestComponent } from './components/page/test/test.component';
import { TaskpageComponent } from './components/page/taskpage/taskpage.component';
import { WorkpageComponent } from './components/page/workpage/workpage.component';


// 引入组建
import { SiderComponent } from './components/assembly/sider/sider.component';
import { LineChartComponent } from './components/assembly/lineChart/lineChart.component';
import { BrokenLineComponent } from './components/assembly/brokenLine/brokenLine.component';
import { PieChartComponent } from './components/assembly/pieChart/pieChart.component';
import { BarChartComponent } from './components/assembly/barChart/barChart.component';
import { AddSampleComponent } from './add-sample/add-sample.component';
import { RingChartComponent } from './components/assembly/ringChart/ringChart.component';
import { EasingChartComponent } from './components/assembly/easingChart/easingChart.component';
import { TabFormComponent } from './components/assembly/tabForm/tabForm.component';
import { TaskDialogComponent } from './components/assembly/taskDialog/taskDialog.component';

registerLocaleData(zh);

@NgModule({
  declarations: [ // 声明组建
    AppComponent,
    DataviewComponent,
    ListComponent,
    ToolComponent,
    HomeComponent,
    SiderComponent,
    LineChartComponent,
    BrokenLineComponent,
    PieChartComponent,
    BarChartComponent,
    AddSampleComponent,
    RingChartComponent,
    EasingChartComponent,
    filterService,
    TabFormComponent,
    uppercaseMoney,
    TestComponent,
    TaskpageComponent,
    WorkpageComponent,
    TaskDialogComponent
  ],
  imports: [  // 导入模块
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRouterModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, RouteService, StorageService, httpService], // 注入服务
  bootstrap: [AppComponent]
})
export class AppModule { }
