import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

@ViewChild('tabform') tabform;

  constructor(private modalService: NzModalService) { }

  public pageData = {
      pageName: '报表任务',
      statisticsData: [{
          title: '集团总部金融，证券投资数据汇总',
          count: 1880,
          dada: [1, 2, 3],
          color: 'blue'
      },
      {
        title: '集团旗下华鼎房产销售，资金数据汇总',
        count: 1530,
        dada: [1, 2, 3],
        color: 'orange'
      },
      {
        title: '集团旗下科士达产品生产成本数据汇总',
        count: 2890,
        dada: [1, 2, 3],
        color: 'green'
      },
      {
        title: '集团广告营销，广告签约投放数据汇总',
        count: 1150,
        dada: [1, 2, 3],
        color: 'red'
      }
    ],
    ringChart0 : {
      data: [{value: 258, name: '未投资'}, {value: 1258, name: '已投资'}],
      perc: 85,
      percText: '证券金融',
      name: '证券金融',
      color: ['#eeeeee', '#0099ff']
    },
    ringChart1 : {
      data: [{value: 148, name: '未销售'}, {value: 1148, name: '已销售'}],
      perc: 90,
      percText: '房产营销',
      name: '房产销售',
      color: ['#eeeeee', '#f39519']
    },
    ringChart2 : {
      data: [{value: 530, name: '不合格率'}, {value: 2250, name: '合格率'}],
      perc: 90,
      percText: '产品生产',
      name: '产品生产',
      color: ['#eeeeee', '#24af3e']
    },
    ringChart3 : {
      data: [{value: 148, name: '未投放'}, {value: 828, name: '已投放'}],
      perc: 90,
      percText: '广告投放',
      name: '广告投放',
      color: ['#eeeeee', '#cc6633']
    },
    selectDepartment: [{department: '产品事业部'}, {department: '广告事业部'}, {department: '金融事业部'}, {department: '大数据事业部'}, {department: '房产事业部'}],
    department: '',
    areaSelect: [{area: '华北区域'}, {area: '东北区域'}, {area: '华南区域'}, {area: '华中区域'}, {area: '西南区域'}, {area: '西北区域'}, {area: '东部区域'}],
    area: '',
    switchDateBtn: [{btnName: '月', btnType: 'primary'}, {btnName: '周', btnType: 'default'}, {btnName: '日', btnType: 'default'}],
    numStatus: [{status: '处理中'}, {status: '未处理'}, {status: '已处理'}, {status: '已驳回'}],
    status: '',
    checked: true,
    tableData: [{
      checked: true,
      businessNo: '20181022',
      orderNo: 'DN50789566398823450',
      rate: 5,
      numType: '产品采购单',
      handleDepartment: 'B2B电商部',
      handlePeople: '赵敏',
      numStatus: '处理中',
      numMoney: '188.00',
      uppercaseMoney: '188.00',
      contractType: 'ESP服务合同',
      contractDate: '2018-10-01 10:15:50',
      reachDate: '2018-10-22 16:30:45',
      downPeople: '乔峰',
      peopleTel: '18890902580',
      address: '北滘镇美的大道6号美的总部'
    }, {
      checked: false,
      businessNo: '20181020',
      orderNo: 'DN46573849069342312',
      rate: 5,
      numType: '生活用品单',
      handleDepartment: 'B2B电商部',
      handlePeople: '韩信',
      numStatus: '已处理',
      numMoney: '255.00',
      uppercaseMoney: '255.00',
      contractType: 'ESP生活合同',
      contractDate: '2018-10-05 11:25:50',
      reachDate: '2018-10-20 14:30:35',
      downPeople: '刘娜',
      peopleTel: '13356778433',
      address: '天河区天河大道天河城01号'
    }, {
      checked: false,
      businessNo: '20181018',
      orderNo: 'DN7877953324128495867',
      rate: 4.5,
      numType: '办公采购单',
      handleDepartment: 'B2c商务部',
      handlePeople: '吴京',
      numStatus: '处理中',
      numMoney: '582.28',
      uppercaseMoney: '582.28',
      contractType: 'ESP商务合同',
      contractDate: '2018-10-08 13:40:20',
      reachDate: '2018-10-18 17:47:55',
      downPeople: '陈杰齐',
      peopleTel: '15576082349',
      address: '北滘镇美的大道1号美的新都汇'
    }, {
      checked: false,
      businessNo: '20181015',
      orderNo: 'DN4653412969785745239',
      rate: 5,
      numType: '设备采购单',
      handleDepartment: 'B2c商务部',
      handlePeople: '商昭蓉',
      numStatus: '未处理',
      numMoney: '490.04',
      uppercaseMoney: '490.04',
      contractType: 'ESP商务合同',
      contractDate: '2018-10-08 11:20:50',
      reachDate: '2018-10-23 16:30:45',
      downPeople: '陈君建',
      peopleTel: '13698984545',
      address: '番禺区会江巨大创意产业园'
    }, {
      checked: false,
      businessNo: '20181030',
      orderNo: 'DN4364523142536748393',
      rate: 5,
      numType: '演出出场费',
      handleDepartment: 'B2c商务部',
      handlePeople: '吴君如',
      numStatus: '未处理',
      numMoney: '790.04',
      uppercaseMoney: '790.04',
      contractType: 'ESP商务合同',
      contractDate: '2018-10-07 11:20:50',
      reachDate: '2018-10-29 16:30:45',
      downPeople: '周星驰',
      peopleTel: '15824556622',
      address: '香港铜锣湾凤凰大道118号星茹股份'
    }
  ],
  dialogData: {
      title: '预处理单',
      formData: {},
      disabled: true,
      index: 0
  }
  };

  ngOnInit() {
      this.pageData.department = this.pageData.selectDepartment[0].department;
      this.pageData.area = this.pageData.areaSelect[0].area;
      this.pageData.status = this.pageData.numStatus[0].status;
  }


  selectFn (data) { // 表格头部三个下拉列表公共方法
    if (data.area) {
      this.pageData.area = data.area;
    } else if (data.department) {
      this.pageData.department = data.department;
    } else {
      this.pageData.status = data.status;
    }
  }

  monthFn () {
    console.log('点击了月');
  }
  weekFn () {
    console.log('点击了周');
  }
  dateFn () {
    console.log('点击了日');
  }

  newBuildbusiness () {
    console.log('新建业务单');
  }

  showModalMiddle (data, type, i) {  // 显示对话框方法
    this.pageData.dialogData.formData = data;
    this.pageData.dialogData.index = i;
    if (type === 'show') {
      this.pageData.dialogData.disabled = true;
    } else {
      this.pageData.dialogData.disabled = false;
    }
    this.tabform.pageData.isVisibleMiddle = true;
  }

  confirmRowData(row) { // 接受子组建点击确认后传递过来的数据
      this.pageData.tableData[row.index] = row.formData;
      console.log(row);
  }

  deleteRow (index) { // 删除数据
    this.modalService.confirm({
      nzTitle  : '<b>删除数据</b>',
      nzContent: '<b>是否确认删除当前数据</b>',
      nzOnOk   : () => {
        this.pageData.tableData.splice(index, 1);
      }
    });
  }
}
