import cookie from 'src/widget/plugin/cookie'
(function () {

  function install (Vue) {
    Vue.prototype.setTitle = function (title) {
      document.title = title
      const iframe = document.createElement('iframe')
      let d = new Date().getTime()
      iframe.src = '//static.zhongan.com/website/mobile/assets/images/fangzhen/share.jpg?'+d
      iframe.style.display = 'none'
      iframe.addEventListener('load', function () {
        setTimeout(function () {
          //iframe.removeEventListener('load')
          document.body.removeChild(iframe)
        }, 0)
      })
      document.body.appendChild(iframe)
    }
    // var VM = Vue.extend(options)
  }

  function installApp (Vue) {
    Vue.prototype.setTitle = function (title, type='normal', lbtn, rbtn) {
      if(lbtn && rbtn){
        console.log(arguments,111)
        this.jsbridge.setH5Header({title:title,type:type,lbtn:lbtn,rbtn:rbtn})
      }else if(lbtn && !rbtn){
        this.jsbridge.setH5Header({title:title,type:type,lbtn:lbtn})
      }else if(!lbtn && rbtn){
        this.jsbridge.setH5Header({title:title,type:type,rbtn:rbtn})
      }else{
        this.jsbridge.setH5Header({title:title,type:type})
      }
        console.log('setTitle')
    }
  }

  let inBaoaApp = cookie.get('http_ostype')
  let ret = inBaoaApp && inBaoaApp != 'undefined' ? installApp : install

  if (typeof exports == 'object') {
    module.exports = ret
  } else if (typeof define == 'function' && define.amd) {
    define([], function() {
      return ret
    })
  } else if (window.Vue) {
    Vue.use(ret)
  }

})()
