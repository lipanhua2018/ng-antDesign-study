import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/page/home/home.component';
import { ListComponent } from './components/page/list/list.component';
import { ToolComponent } from './components/page/tool/tool.component';

const routes:Routes=[   //声明路由，并配置路由
    // {path: '',redirectTo:'/app', pathMatch:'full'},
        {path:'home', component: HomeComponent},
        {path:'list', component: ListComponent},
        {path:'tool', component: ToolComponent},
        {path:'**', redirectTo:'home'}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRouterModule {}