const Service = require('egg').Service;
const state = {
  hospitalName: '重庆市第九人民医院',
  hospitalIcons: ['公立', '三甲', '综合'],
  address: '重庆市重庆市北碚区嘉陵村69号',
  phone: '023-63221327',
  serves: [
    { serveName: '预约挂号', serveDesc: '在线挂号不白跑', img: 'http://39.100.135.194/static/cms/img/kt_yygh.png' },
    { serveName: '智能自诊', serveDesc: '症状自查省时间', img: 'http://39.100.135.194/static/cms/img/kt_znzz.png' },
    { serveName: '挂当天号', serveDesc: '在线挂号不白跑', img: 'http://39.100.135.194/static/cms/img/kt_gdrh.png' },
    { serveName: '挂号取号', serveDesc: '在线取号免排队', img: 'http://39.100.135.194/static/cms/img/kt_qhqh.png' },
    { serveName: '门诊缴费', serveDesc: '在线缴费不排队', img: 'http://39.100.135.194/static/cms/img/kt_mzjf.png' },
    { serveName: '报告查询', serveDesc: '医疗报告随时查', img: 'http://39.100.135.194/static/cms/img/kt_bgcx.png' },
    { serveName: '候诊排队', serveDesc: '医疗报告随时查', img: 'http://39.100.135.194/static/cms/img/kt_hzpd.png' },
    { serveName: '住院押金', serveDesc: '住院缴费不用跑', img: 'http://39.100.135.194/static/cms/img/kt_zyyj.png' },
  ]
};

class HomeService extends Service {
  async fetchHomeData(id) {
    const data = await Promise.resolve(state);
    return data;
  }
}

module.exports = HomeService;
