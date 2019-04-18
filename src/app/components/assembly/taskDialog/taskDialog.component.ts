import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskDialog',
  templateUrl: './taskDialog.component.html',
  styleUrls: ['./taskDialog.component.less']
})
export class TaskDialogComponent implements OnInit {
@Input('rowInfo') rowInfo;

@Output() dialogData = new EventEmitter();
  public pageData = {
        isVisible: false,
        title: '',
        status: [{text: '普通', type: 'ordinary'}, {text: '紧急', type: 'urgent'}, {text: '重要', type: 'important'}]
  };
  constructor() { }

  ngOnInit() {
      // console.log(this.rowInfo)
  }


  handleCancel() {
    this.pageData.isVisible = false;
  }

  handleOk () {
    const rex = /(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})\s(\d{2}):(\d{2}):(\d{2})/;
    // 这个正则是用来验证返回给父级的数据time格式是不是  2018-02-15 10:15:30
    if (rex.test(this.rowInfo.time)) {
      this.dialogData.emit(this.rowInfo); // 发送数据给父级
      this.pageData.isVisible = false;
    } else {
      const date = new Date(this.rowInfo.time);
      const year = date.getFullYear();
      const monut = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      this.rowInfo.time = `${year}-${this.zero(monut)}-${this.zero(day)} ${this.zero(hours)}:${this.zero(minutes)}:${this.zero(seconds)}`;
      this.dialogData.emit(this.rowInfo); // 发送数据给父级
      this.pageData.isVisible = false;
    }
  }
  zero (num: Number) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }
  onChange(result: Date): void {
      console.log(result);
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }
}
