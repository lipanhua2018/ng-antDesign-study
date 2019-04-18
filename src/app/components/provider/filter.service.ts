import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
// 过滤器服务，引入Pipe, PipeTransform模块
export class filterService implements PipeTransform {
    constructor() { }
    transform(value: string): string|null {
        const date = new Date(Number(value));
        const fullYear = date.getFullYear();  // 年
        const month = date.getMonth() + 1;    // 月
        const day = date.getDate();           // 日
        // let hours = date.getHours();        // 时
        // let minutes = date.getMinutes();    // 时
        // let seconds = date.getSeconds();    // 秒
        // return `${fullYear}年${month}月${day}日 ${hours}:${minutes}:${seconds}`
        return `${fullYear}年${this.toDou(month)}月${this.toDou(day)}日`;
    }
    toDou (n) {
        if ( n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
}
