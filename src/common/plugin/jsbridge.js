import jsbridge from 'src/widget/jsbridge'
import partnerJsbridge from 'src/widget/jsbridge/partner'

(function () {

  function install (Vue) {
    Vue.jsbridge = Vue.prototype.jsbridge = jsbridge
    Vue.partnerJsbridge = Vue.prototype.partnerJsbridge = partnerJsbridge
  }

  if (typeof exports == 'object') {
    module.exports = install
  } else if (typeof define == 'function' && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()
