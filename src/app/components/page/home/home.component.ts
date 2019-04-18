import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpService } from '../../provider/http.service';
import { StorageService } from '../../provider/storage.service';
import { NzMessageService } from 'ng-zorro-antd';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  @ViewChild('dtHeight') dtHeight;
  constructor(private http: HttpClient, private msg: NzMessageService, private ajax: httpService, private storage: StorageService) { }

  public pageData = {
    rate: 4.5,
    backlogData: [
        {
          title: '行政任务',
          stay: 29,
          haveDone: 14,
          handle: 6,
          content: '集团行政，投资领域行政，人事行政',
          listFooter: '2018年10月15日，黎氏集团总部'
        },
        {
          title: '报表任务',
          stay: 43,
          haveDone: 18,
          handle: 7,
          content: '金融报表，财税报表，发票报表以及投资报表',
          listFooter: '2018年10月15日，黎氏集团总部'
        },
        {
          title: '开发任务',
          stay: 36,
          haveDone: 25,
          handle: 9,
          content: '复兴地产开发，新能源开发，产品迭代开发等',
          listFooter: '2018年10月15日，黎氏集团总部'
        }],
        data: [],
        list: [],
        ringChart1 : {
            data: [{value: 258, name: '未完成'}, {value: 1258, name: '订单已完成'}],
            perc: 85,
            percText: '已成交量',
            name: '订单成交',
            color: ['#eeeeee', '#28ae2e']
        },
        ringChart2 : {
          data: [{value: 148, name: '差评率'}, {value: 1148, name: '好评率'}],
          perc: 90,
          percText: '客户评价',
          name: '评价比例',
          color: ['#eeeeee', '#55a1ff']
        },
        appointment: [
          {
            customer: '蚂蚁金服',
            vip: 'vip客户',
            time: '2018-10-16 10:15:00',
            describe: '阿里巴巴集团蚂蚁金服技术部',
            department: 'web前端IT部门',
            color: 'red',
            name: 'design'
          },
          {
            customer: 'github中国',
            vip: '贵宾客户',
            time: '2018-10-18 14:15:00',
            describe: 'github中国股份有限公司',
            department: 'github云服务',
            color: 'yellow',
            name: 'github'
          },
          {
            customer: 'google中国',
            vip: '钻石客户',
            time: '2018-10-20 10:15:00',
            describe: '谷歌中国区域股份有限公司',
            department: 'google人工智能',
            color: 'green',
            name: 'google'
          }
        ],
      notice: []    // 公告
  };

    ngOnInit() {
        const dt = document.getElementById('dtHeight');
        this.getList();
        this.getNotice();
        // console.log(window.innerHeight, dt.innerHTML, dt.offsetHeight);
    }

    edit(item: any): void {
        this.msg.success(item.email);
    }
    getData(callback: (res: any) => void): void { // 人家模板的请求方式
        this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
    }
    getList () {
      // console.log(!this.storage.getStorage('list'))
        if (!this.storage.getStorage('list')) {  // 本地拿不到数据
            this.getData((res: any) => {
              this.pageData.data = res.results;
              this.pageData.list = res.results;
              this.storage.setStorage('list', res.results);
              // console.log(this.pageData.data);
          });
        } else {
          this.pageData.list = JSON.parse(this.storage.getStorage('list'));
          this.pageData.data = JSON.parse(this.storage.getStorage('list'));
        }
    }
    getNotice() { // 请求公告数据
        if (this.storage.dataType(this.storage.getStorage('notice')) === '[object Null]') { // 本地的storage拿不到数据就请求ajax
          const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
          this.ajax.getData(url, {}).then((res: any) => {
              this.pageData.notice = res.result;
              this.storage.setStorage('notice', res.result);
          });
        } else {
          this.pageData.notice = JSON.parse(this.storage.getStorage('notice'));
        }
    }
    rateMethods(num: any) { // 五星评分设置
      this.pageData.rate = num;
    }
}
