import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabForm',
  templateUrl: './tabForm.component.html',
  styleUrls: ['./tabForm.component.less']
})
export class TabFormComponent implements OnInit {

@Input() dialogData: any;  // input接收来自父级的数据
@Output() sendParent = new EventEmitter <any> ();  // output传递数据给父级
  constructor() { }
  public pageData = {
    isVisibleMiddle: false,
    title: ''
  };

  ngOnInit() {

  }

  handleOkMiddle(): void {
    // console.log('click 确定');
    this.sendParent.emit(this.dialogData);
    this.pageData.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    // console.log('click 取消');
    this.pageData.isVisibleMiddle = false;
  }
}
