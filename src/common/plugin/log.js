import cookie from 'src/widget/plugin/cookie'

(function () {
  function install (Vue) {
    /*
      targetType 页面来源 (0-产品 1-计划书)
      eventType  事件类型 （1-分享 2-点击）
    */
    Vue.prototype.log = function (args) {
      let img = new Image()
      // img.style.display = 'none'
      let query = ''
      for (let x in args) {
        query += x + '=' + args[x] + '&'
        // console.log(query)
      }
      if (args.eventType == 2 && cookie.get('http_ostype')) {
        // app内不统计点击
        return
      }
      img.src = '/pluto/policy/statistics/image?' + query + 'time=' + Math.random()
    }
  }

  if (typeof exports == 'object') {
    module.exports = install
  } else if (typeof define == 'function' && define.amd) {
    define([], function() {
      return install
    })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()
