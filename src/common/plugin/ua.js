(function () {

  function install (Vue) {
    const ua = window.navigator.userAgent
    Vue.uaDetector = Vue.prototype.uaDetector = {
      inAlipay: /AlipayClient|AliApp/i.test(ua),
      inWechat: /MicroMessenger/i.test(ua),
      osWinPhone: /Windows\sPhone\s(?:OS\s)?([\d\.]+)/.test(ua),
      osAndroid: /Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua),
      osIos: /(iPhone|iPad|iPod)/.test(ua) && /OS ([\d_\.]+) like Mac OS X/.test(ua)
    // var VM = Vue.extend(options)
    }
  }

  if (typeof exports == 'object') {
    module.exports = install
  } else if (typeof define == 'function' && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()
