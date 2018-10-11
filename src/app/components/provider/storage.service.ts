import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  //检测数据类型
  public dataType (type){
  let dataType = Object.prototype.toString;
      return dataType.call(type)
 }

  public setItem(name,key){
      localStorage.setItem(name,JSON.stringify(key));
  }

  public getItem(name){
      return localStorage.getItem(name);
  }

  public deleteItem(name){
      localStorage.removeItem(name);
  }
}
