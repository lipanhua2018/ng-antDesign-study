import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

    // 检测数据类型
    public dataType (type) {
    const dataType = Object.prototype.toString;
      return dataType.call(type);
    }

    setStorage (key, value) {
        if (this.dataType(value) !== '[object String]') {
            // console.log('存储对象是个引用数据类型')
            window.localStorage.setItem(key, JSON.stringify(value));
        } else {
            // console.log('存储对象是个字符串')
            window.localStorage.setItem(key, value);
        }
    }
    getStorage (key) {
        // debugger
        return window.localStorage.getItem(key);
    }
    removeStorage (key) {
        if (this.getStorage(key)) {
            window.localStorage.removeItem(key);
        } else {
            console.log('storage中并没有存储' + key);
        }
    }
}
