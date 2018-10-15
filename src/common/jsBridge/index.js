// baoa app jsbridge
import cookie from 'src/widget/plugin/cookie'
let token = cookie.get('http_usertoken')?cookie.get('http_usertoken'):""

var appLoaded = false // 判断APP 装载完成

// 获取数据字典内容
window.dictionary = {}
let dictionary = [
  "area",              // 全国地址字典数据类型
  "bankcode",          // 银行卡列表
  "benefit_type",      // 受益人类型
  "card_type",         // 证件类型
  "citizenship",       // 国家列表
  "cover",             // 封面类型
  "degree",            // 学历列表
  "coverage_state",    // coverage_state
  "gender",            // 性别
  "insure_state",      // 保单状态
  "marriage",          // 婚姻情况列表
  "nation",            // 民族
  "occupation",        // 职业列表
  "occupation_level",  // 职业等级列表
  "payment",           // 支付类型
  "policy_channel",    // 保险渠道
  "post_type",         // 保单寄送类型
  "preserve",          // 保全类型
  "relation",          // 家庭关系
  "sales_channel"      // 销售渠道
]

if (process.env.NODE_ENV !== 'production') { // 为了在页面能获取字典而使用
  let area = require("./json/area")
  let bankcode = require("./json/bankcode")
  let benefittype = require("./json/benefit_type")
  let cardtype = require("./json/card_type")
  let citizenship = require("./json/citizenship")
  let cover = require("./json/cover")
  let degree = require("./json/degree")
  let coveragestate = require("./json/coverage_state")
  let gender = require("./json/gender")
  let insurestate = require("./json/insure_state")
  let marriage = require("./json/marriage")
  let nation = require("./json/nation")
  let occupation = require("./json/occupation")
  let occupationlevel = require("./json/occupation_level")
  let payment = require("./json/payment")
  let policychannel = require("./json/policy_channel")
  let posttype = require("./json/post_type")
  let preserve = require("./json/preserve")
  let relation = require("./json/relation")
  let saleschannel = require("./json/sales_channel")
  let aa = [area, bankcode, benefittype, cardtype, citizenship, cover, degree, coveragestate, gender, insurestate, marriage, nation, occupation, occupationlevel, payment, policychannel, posttype, preserve, relation, saleschannel]
  aa.map(function (v, i, arr) {
    dictionary[v.name] = KVtoNV(v.item)
  })
}

function KVtoNV (n) {
  // let newObj = {}
  if (typeof n == 'object') {
    if (Array.isArray(n)) {
      return n.map(function (v, i, arr) {
        return KVtoNV(v)
      })
    } else {
      let newN = {}
      Object.keys(n).map(function (v, i, arr) {
        if (v == "key") {
          newN.value = KVtoNV(n[v])
        } else if (v == "value") {
          newN.name = KVtoNV(n[v])
        } else {
          newN[v] = KVtoNV(n[v])
        }
      })
      return newN
    }
  } else {
    return n
  }
}

// 当app加载完毕回调 修改 appLoaded 表示完毕
window.AppGetH5Header = (n) => {
  appLoaded = true
  return appLoaded
}

let jsbridge = {
  ostype () {
    return cookie.get('http_ostype')
  },
  token () {
    return cookie.get('http_usertoken')
  },
  appReady () {
    // console.log('---------')
    if(!this.ostype()){
      return new Promise((resolve, reject) => {
        // console.log('==============')
        // if (!appLoaded) {
          // alert('appLoaded')
          // clearInterval(tid)
          // return
        // }
        if (window.AppJSInterface) {
          // console.log('start success')
          // alert('AppJSInterface')
          resolve('success')
        } else {
          reject('fail')
        }
      })
    }
    return new Promise((resolve, reject) => {
      let tid = setInterval(() => {
        // console.log('==============')
        // if (!appLoaded) {
          // alert('appLoaded')
          // clearInterval(tid)
          // return
        // }
        if (window.AppJSInterface) {
          // console.log('start success')
          // alert('AppJSInterface')
          clearInterval(tid)
          resolve('success')
        } else {
          reject('fail')
        }
      }, 100)
    })
  },
  setH5Header (param) {
    // param 头部参数
    // alert('rbtncb')
    this.appReady().then(success => {
      // 头部类型 & 文本
      if (param.title && param.type) {
        window.AppJSInterface.AppSetH5Header(JSON.stringify({title: param.title ,type: param.type}))
      }
      // 头部右侧菜单文本 & 点击回调
      if(param.rbtn) {
        if(param.rbtn.image){
          window.AppJSInterface.setRightWebViewMenu(JSON.stringify({image:param.rbtn.image,cbname:param.rbtn.cbname,show:param.rbtn.show}))
          return
        }
        window.AppJSInterface.setRightWebViewMenu(JSON.stringify({text: param.rbtn.text ,cbname:param.rbtn.cbname,show:param.rbtn.show,color:param.rbtn.color}))
      }

      // 头部左侧菜单文本 & 点击回调
      if(param.lbtn) {
        window.AppJSInterface.setLeftWebViewMenu(JSON.stringify({text: param.lbtn.text ,cbname: param.lbtn.cbname,show:param.lbtn.show}))
      }
      console.log(param)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // rightMenu (n) {
  //   this.appReady().then(success => {
  //   }, fail => {
  //     console.log(fail)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  articleDetail (n) {
    this.appReady().then(success => {
      window.AppJSInterface.studyArticleDetail(n)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  setDictionary (n) { // 获取字典
    // return new Promise((resolve, reject) => {
      this.appReady().then(success => {
        let stringJson = JSON.parse(window.AppJSInterface.getDicDataByType(n))
        dictionary[stringJson.name] = KVtoNV(stringJson.item)
        resolve(stringJson)
      }, fail => {
        reject(fail)
      }).catch(error => {
        reject(error)
      })
    // })
  },
  setAllDictionary () {
    let st = localStorage.getItem("dictionary")
    if (st && st.length > 0) { // 默认从localStorage读取
      dictionary = JSON.parse(st)
      return
    }
    var prom = dictionary.map(function (v, i, arr) { // 如果localStorage 无
      return this.setDictionary(v)
    })
    Promise.all(prom).then(success => {
      if (localStorage) {
        localStorage.setItem("dictionary", JSON.stringify(dictionary))
      }
      console.log(success)
    }, fail => {
      console.log(fail)
    }).catch(e => {
      console.log(e)
    })
  },
  getDictionary (n) {
    this.appReady().then(success => {
      let tid = setInterval(() => {
        if (window.dictionary[n]) {
          window.clearInterval(tid)
          // return resolve(window.dictionary[n])
        } else {
          console.log('fail')
        }
      }, 500)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  findDictionary (target, n) { // 查字典  n.name || n.value
    let k = Object.keys(n)[0]
    let va = n[k]
    let seled = null
    function findObject (o) {
      if (typeof o == 'object') {
        if (Array.isArray(o)) {
          o.find(function (v, i, arr) {
            return findObject(v)
          })
        } else {
          if (o[k] == va) {
            seled = o
          }
        }
      }
    }
    findObject(target)
    return seled
  },
  // 呼叫app 直接调相机
  callCamera (cbname,text) {
    this.appReady().then(success => {
      window.AppJSInterface.userCamera(cbname,text)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 呼叫app 直接调相册
  callPhotos (cbname) {
    this.appReady().then(success => {
      window.AppJSInterface.userPhotos(cbname)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 呼叫app 照相机和相册
  callImage (cbname,text) {
    // return new Promise((resolve, reject) => {
    this.appReady().then(success => {
      let t = text||""
      window.AppJSInterface.takeUserImage(cbname,t)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
    // })
  },
  callAddress () {
    // return new Promise((resolve, reject) => {
      this.appReady().then(success => {
        window.AppJSInterface.popUpAddressChooseView('address')
      }, fail => {
        console.log(fail)
      }).catch(error => {
        console.log(error)
      })
    // })
  },
  //查看全部评论
  viewAllComment(commentID){
    this.appReady().then(success => {
      // 评论跳转回调函数
      window.AppJSInterface.showSecretDetailWithTopicID(commentID);
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  //跳转到评论详情页
  JumpToRemarkDetail(remarkID){
    this.appReady().then(success => {
      // 评论跳转回调函数
      window.AppJSInterface.showSecretDetailWithTopicID(remarkID);
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },

  //呼叫客户
  CallGuest(guestPhoneNum){

    this.appReady().then(success => {
      window.AppJSInterface.callPhoneNum(guestPhoneNum);
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  //评论
  // mypublishComment(commentID){
  //   this.appReady().then(success => {
  //     // 评论跳转回调函数
  //     // window.AppJSInterface.showSecretDetailWithTopicID(commentID);
  //   }, fail => {
  //     console.log(fail)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  // 分享配置
  shareConfig (param) {
    let json
    let shareLink = window.location.protocol+'//'+window.location.host+'/pluto/broker/businessCard/oauth?url='+encodeURIComponent(param.link)
    this.appReady().then(success => {
      if (param.type == 'image'){
        json = JSON.stringify({
          type: 'image',
          link: param.link,
          callback: param.callback
        })
      } else {
        json = JSON.stringify({
          type: param.type,
          img: param.img,
          popTitle: param.popTitle,
          title: param.title,
          desc: param.desc,
          link: shareLink,
          preview : param.preview,
          callback: param.callback,
          hideCallback: param.hideCallback,
          cardBoolen : param.cardBoolen
        })
      }
      window.AppJSInterface.appLocalShare(json)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 登出
  callLogout () {
    this.appReady().then(success => {
      window.AppJSInterface.appLogout()
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 登录
  callLogin () {
    this.appReady().then(success => {
      window.AppJSInterface.appLogin()
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 注册
  callSignin () {
    this.appReady().then(success => {
      window.AppJSInterface.APPRigester()
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 电话
  callPhone (num) {
    this.appReady().then(success => {
      window.AppJSInterface.callPhoneNum(num);
      return;
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
    //COPY
    copyClipboard (content) {
        this.appReady().then(success => {
            window.AppJSInterface.CopyToClipboardWithStr(content);
        },fail=>{
            console.log(fail)
        }).catch(error => {
            console.log(error)
        })
    },
  // 首页banner显示隐藏
  setStatusBar (status) {
    this.appReady().then(success => {
      window.AppJSInterface.setStatusBarColor(status);
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 下载海报
  downloadPoster (url) {
    this.appReady().then(success =>{
      window.AppJSInterface.imageDownloadWithImageUrl(url)
    },fail=>{
      console.log(fail)
    }).catch(err=>{
      console.log(err)
    })
  },
  // type 'show':''
  callMask (type) {
    this.appReady().then(success => {
      window.AppJSInterface.appAlertShadow(type)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 安卓 app 显示 pdf
  showPDFinAndroid (pdfUrl) {
    this.appReady().then(success => {
      window.AppJSInterface.openPDFWithUrl(pdfUrl);
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  //   个人中心 关于保啊
  goAboutBaoa(){
    this.appReady().then(success => {
      window.AppJSInterface.appAboutDisplay()
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  //  秘一下首页
  gomiyixiaindex(){
    this.appReady().then(success => {
      window.AppJSInterface.gomiyixiaHome()
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  // 秘一下从用户中心进入
  goMineSecretListController(){
    this.appReady().then(success => {
      window.AppJSInterface.goMineSecretListController()
    },fail=>{
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  onJSInvokeResult (argument) {
    document.body.innerHTML += argument.name
  },
  callCardImgUpload(param){
    this.appReady().then(success => {
      let json = JSON.stringify(param)
      window.AppJSInterface.photoSelectWithUserIDandPhotoNum(json)
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  openclient(url){
    if(token){
      return
    }
    const ua = window.navigator.userAgent
    let uaDetector = {
      inAlipay: /AlipayClient|AliApp/i.test(ua),
      inWechat: /MicroMessenger/i.test(ua),
      osWinPhone: /Windows\sPhone\s(?:OS\s)?([\d\.]+)/.test(ua),
      osAndroid: /Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua),
      osIos: /(iPhone|iPad|iPod)/.test(ua) && /OS ([\d_\.]+) like Mac OS X/.test(ua)
    // var VM = Vue.extend(options)
    };
    let config = {
        /*scheme:必须*/
        scheme_IOS: 'baoa://?' + url,
        scheme_Adr: 'baoa://splash?' + url,
        download_url: window.location.protocol + "//" + document.domain + "/index.html#/godownload",
        timeout: 2600
    };
    var t ;
    // alert(config.scheme_IOS)
    if(!uaDetector.inWechat){
      let startTime = Date.now();
      let ifr = document.createElement('iframe');
      //ifr.src = uaDetector.osIos ? config.scheme_IOS : config.scheme_Adr;
      window.location.href = uaDetector.osIos ? config.scheme_IOS : config.scheme_Adr;
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
        t = setTimeout(function() {
          let endTime = Date.now();
          if (!startTime || endTime - startTime < config.timeout + 200) {
              window.location = config.download_url;
          } else {

          }
      }, config.timeout);
      window.onblur = function() {
          clearTimeout(t);
      }
    }
  }
}
export default jsbridge
