import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { StorageService } from './storage.service';
// ActivatedRoute 接收路由传值和路由的get传值，
// NavigationExtras 配置路由参数

@Injectable()
export class RouteService {

  constructor(private route: Router, private activated: ActivatedRoute, private store: StorageService) { }

  public goPage(path, routeData?) {  // js事件路由跳转
        // console.log(routeData instanceof Array, '数组还是对象', routeData instanceof Object)
        // console.log(this.store.dataType(routeData))
        const navigation: NavigationExtras = { // 配置路由参数，path是必传参数，routeData是可选参数
            queryParams: routeData,
            fragment: null
        };
        this.route.navigate([path], navigation);
  }

  public getParams() {
    //  console.log('执行我这里的方法了')
        let msg = null;
        this.activated.queryParams.subscribe((data) => {
            msg = data;
        });
        return msg;
    }
}
