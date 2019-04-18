import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})   // 表示提供商注册到顶层根注入器上，当你在顶层提供该服务时，
                                    // Angular 就会为 HeroService 创建一个单一的、共享的实例，并把它注入到任何想要它的类上

export class httpService {

    constructor(private http: HttpClient) { }    // 在组件的构造函数中实例化 HttpClient

    // public httpOptions = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})

    public getData (url, params) {
        return new Promise((resolve, reject) => {
            this.http.get(url, params).subscribe(res => {
                resolve(res);
            });
        });
    }

    public postData (url, params) {
        return new Promise((resolve, reject) => {
            //  this.header.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            this.http.post(url, params).subscribe(res => {
                resolve(res);
            });
        });
    }

    public postListData (url, data): Observable <any> {
            return this.http.post(url, data);
    }
}
