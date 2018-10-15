    // isAPP
    // ios
    // if (typeof Apptodo != 'undefined') {
    //   return true
    // }
    // android
    // if (typeof App != 'undefined' && typeof App.todo  != 'undefined') {
    //   return true
    // }
    // return false

    // iOS Apptodo(parameter)  android App.todo(parameter)
    // parameter 为 json 格式
    // parameter 包含公共参数 action(必传) 与 args(非必传)

    // action 为调用app执行动作
    // Args 为 动作参数

    // app回调H5方法
    // callback()
    // 公共参数 带有 action 执行动作，code 执行结果 (1 成功 ，0 失败)

    // action 动作
    // 1  goback 返回
    //   args = n ; 当前返回n页

    // 2 setInitNew app 下一页是否新开视图控制器
    //   args = 1 ; 新开

    // 3 goLogin 调起登录
    //   args 可不传

    // 4 getUserInfo 获取用户信息 
    //   args 可不传

    // 5  share 分享
    // args 包含 title content url pic
// 武曲星 app jsbridge
window.noop = function(){}
let jsbridge = {
  getUA() {
     const ua = window.navigator.userAgent
     if(/Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua)){
      //  alert('osAndroid')
      // osAndroid: 
      return 'osAndroid' 
     }else if(/(iPhone|iPad|iPod)/.test(ua) && /OS ([\d_\.]+) like Mac OS X/.test(ua)){
      //  alert('osIos')
      //osIos:
      return 'osIos'
     }
  },
  isWQXApp() {
    console.log(typeof Apptodo != "undefined");
    console.log(typeof App != 'undefined' && typeof App.todo  != 'undefined')
    return (typeof Apptodo != 'undefined') || (typeof App != 'undefined' && typeof App.todo  != 'undefined')
  },
  appReady () {
    // console.log('---------')
      return new Promise((resolve, reject) => {
        // let tid = setInterval(() => {
          // console.log('==============')
          // if (!appLoaded) {
            // alert('appLoaded')
            // clearInterval(tid)
            // return
          // }
        if (this.isWQXApp()) {
          // console.log('start success')
          // clearInterval(tid)
          resolve('success')
          // alert(this.isWQXApp())
        } else {
          reject('fail')
        }
      // }, 100)
    })
  },
  setTitle(param){
    this.appReady().then(success => {
      // args 包含 title content url pic
      // let callback = cbname || 'noop'
      // alert('success')
      let e = JSON.stringify({action:"setWebTitle",args:param})
      // alert(e)
      switch (this.getUA()) {
        case 'osAndroid':
          App.todo(e)
          break;
        case 'osIos':
          Apptodo(e)
          break;
        default:
          break;
      }
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  },
  shareConfig (param,cbname) {
    // let shareLink = window.location.protocol+'//'+window.location.host+'/pluto/broker/businessCard/oauth?url='+encodeURIComponent(param.link)
    this.appReady().then(success => {
      // args 包含 title content url pic
      // let callback = cbname || 'noop'
      // alert('success')
      let e = JSON.stringify({action:"share",args:param})
      // alert(e)
      switch (this.getUA()) {
        case 'osAndroid':
          App.todo(e)
          break;
        case 'osIos':
          Apptodo(e)
          break;
        default:
          break;
      }
    }, fail => {
      console.log(fail)
    }).catch(error => {
      console.log(error)
    })
  }
  // window.callback1 = (ret)=>{return ret}
  // Apptodo({"action":"share","args":{"title":"标题"...},"callback":"callback1")
}
export default jsbridge
