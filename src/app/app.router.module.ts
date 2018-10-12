import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataviewComponent } from './components/page/dataview/dataview.component';
import { ListComponent } from './components/page/list/list.component';
import { ToolComponent } from './components/page/tool/tool.component';
import { HomeComponent } from './components/page/home/home.component';

const routes:Routes=[   //声明路由，并配置路由

        {path:'dataview', component: DataviewComponent},
        {path:'list', component: ListComponent},
        {path:'tool', component: ToolComponent},
        {path:'home', component: HomeComponent},
        {path:'**', redirectTo:'home'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRouterModule {}