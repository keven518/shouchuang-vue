
import store from 'src/widget/plugin/store.js'
(function () {
    function install (Vue) {
        Vue.getModel = Vue.prototype.getModel = {

            modelRoute(prodId) {
                let modelFlock = store.get('prodModel');
                console.log('modelFlock',modelFlock);
                let linkUrl='';
                modelFlock.forEach((obj)=>{
                    if(parseInt(obj.prodId) == prodId){
                        linkUrl = obj.linkUrl;
                    }
                });
                linkUrl = /^\/(\w+)\/.*$/.exec(linkUrl);
                return linkUrl[1];
            }
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