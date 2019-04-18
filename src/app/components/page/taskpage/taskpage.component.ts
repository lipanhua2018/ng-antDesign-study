import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { RouteService } from '../../provider/route.service';
import { TaskDialogComponent } from '../../assembly/taskDialog/taskDialog.component';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.less']
})
export class TaskpageComponent implements OnInit {
@ViewChild('taskdialog') taskDialog;
  public pageData = {
      task: [],
      statisticsTabs: [{
        title: '学习数据统计',
        content: [{
          draft: 'JavaScript',
          describe: 'JavaScript 是世界上最流行的脚本语言，它适用于 PC、平板电脑脚本开发，使用量为：',
          money: '989780976'
        }, {
          draft: 'angular6',
          describe: 'Angular 是一个开发平台。集声明式模板、依赖注入、端到端工具和一些最佳实践于一身。用户数约：',
          money: '2364139'
        }, {
          draft: 'vue.js',
          describe: 'Vue是一套用于构建用户界面的渐进式框架。不同的是，vue被设计为可以自底向上逐层应用,用户约：',
          money: '46534227'
        }, {
          draft: 'reacct',
          describe: '一个用于构建用户界面的JavaScript库，React也可以使用Node在服务器端渲染 ，react使用数为：',
          money: '635823'
        }]
        }, {
          title: '金融数据统计',
          content: [{
            draft: '天宏基金',
            describe: '天宏基金成立于1998年10月，拥有强大资金实力，企业日投资约为：',
            money: '989789066.03'
          }, {
            draft: '方正证券',
            describe: '方正证券是国内领先的证券交易平台，业务范围包括股票投资，股票抵押，每天交易额为：。',
            money: '236534122390.86'
          }, {
            draft: '天使信托',
            describe: '天使信托成立于2001年9月，主要业务有：企业信用评级，产品信用评级，日流动资金为：',
            money: '265342316273.83'
          }, {
            draft: '上证综指',
            describe: '上证综指是国内A股企业的主要上市融资平台。平台下面每天交易额为：',
            money: '6354231823.86'
          }]
          }, {
            title: '生产数据统计',
            content: [{
              draft: '硬件设备',
              describe: '天宏基金成立于1998年10月，拥有强大资金实力，企业日投资约为：',
              money: '989789066.03'
            }, {
              draft: '软件设备',
              describe: '方正证券是国内领先的证券交易平台，业务范围包括股票投资，股票抵押，每天交易额为：。',
              money: '236534122390.86'
            }, {
              draft: '汽车饰品',
              describe: '天使信托成立于2001年9月，主要业务有：企业信用评级，产品信用评级日流动资金为：',
              money: '265342316273.83'
            }, {
              draft: '棉麻产品',
              describe: '上证综指是国内A股企业的主要上市融资平台。平台下面每天交易额为：',
              money: '6354231823.86'
            }]
        }],
        tableData: [
          {check: true, taskText: 'asp工作任务，工单列表查询，删除，编辑，新增',
          taskTip: 'asp工作任务注意事项', department: '行政管理部', time: '2018-11-09 10:25:10', status: '普通'},
          {check: false, taskText: 'uat工作任务，uat的工作，uat的工作，uat的工作，uat的工作',
          taskTip: 'uat工作任务注意事项', department: '商务科部门', time: '2018-11-07 09:25:50', status: '紧急'},
          {check: false, taskText: 'sit工作任务，sit的工作任务,sit的工作任务,sit的工作任务',
          taskTip: 'sit工作任务注意事项', department: 'IT事业部', time: '2018-11-08 14:25:37', status: '重要'},
          {check: false, taskText: 'dev工作任务，dev工作内容，dev工作内容，dev工作内容，dev工作内容',
          taskTip: 'dev工作任务注意事项', department: '物业事业部', time: '2018-11-10 15:30:33', status: '普通'},
          {check: false, taskText: 'asp工作任务，asp的新工作任务，asp的新工作任务，asp的新工作任务',
          taskTip: 'asp工作任务注意事项', department: '电竞竞技事业部', time: '2018-11-10 11:15:30', status: '紧急'}
        ],
        taskRow: {}
  };
  constructor(private route: RouteService, private routeInfo: ActivatedRoute, private modalService: NzModalService) { }

  ngOnInit() {

    // let params = this.route.getParams();
    // console.log(params)
    // console.log(this.route, this.routeInfo)
    // this.routeInfo.queryParams.subscribe(data => {
    //     // this.pageData.task = Params(data)
    // })
  }
  lookRowInfo (row, index) {
    this.taskDialog.pageData.isVisible = true;
    row.title = '查看详情';
    row.disabled = true;
    row.index = index;
    this.pageData.taskRow = row;
  }

  deleteRow (index) {
    this.modalService.confirm({
      nzTitle  : '<b>删除数据</b>',
      nzContent: '<b>是否确认删除当前数据</b>',
      nzOnOk   : () => {
        this.pageData.tableData.splice(index, 1);
      }
    });
  }

  editRowInfo (row, index) {
      this.taskDialog.pageData.isVisible = true;
      row.title = '编辑信息';
      row.disabled = false;
      row.index = index;
      this.pageData.taskRow = row;
  }

  addRowInfo () {
    this.taskDialog.pageData.isVisible = true;
    this.pageData.taskRow = {
        check: true,
        taskText: '',
        taskTip: '',
        department: '',
        time: '',
        status: '',
        title: '新增任务',
        disabled: false
      };
  }

  confirmRowData (data) {
    switch (data.title) {
      case '查看详情':
          console.log('看就看呗，你还想干啥');
      break;

      case '编辑信息':
          this.pageData.tableData[data.index] = data;
      break;

      case '新增任务':
          if (!data.index) {
            this.pageData.tableData.push(data);
          }
      break;
    }
  }
}



