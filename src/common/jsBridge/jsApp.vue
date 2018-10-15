<template>
  <div class="jsapp-page">
    <ul>
      <li>
        <div @click="callImage($event, 'photocb')">呼叫app 相机/相册选择框</div>
        <div id="aa"></div>
      </li>
      <li>
        <div @click="callCamera($event, 'photocb')">呼叫app 照相机</div>
        <div id="bb"></div>
      </li>
      <li>
        <div @click="callPhotos($event, 'photocb')">呼叫app 相册</div>
        <div id="cc"></div>
      </li>
      <li>
        <div @click="callAddress">呼叫app Address</div>
        <div id="dd"></div>
      </li>
      <li>
        <div @click="getDic">呼叫app 获取字典</div>
        <div id="dic"></div>
      </li>
      <li>
        <div @click="configShare">呼叫app 配置分享</div>
        <div id="share"></div>
      </li>
      <li>
        <div @click="showShare">呼叫app 直接调起分享</div>
        <div id="shareshow"></div>
      </li>
      <li>
        <div @click="callLogout">呼叫app 登出</div>
        <div id="logout"></div>
      </li>
      <li>
        <div @click="callLogin">呼叫app 跳登录页</div>
        <div id="logout"></div>
      </li>
      <li>
        <div @click="callSignin">呼叫app 跳注册</div>
        <div id="logout"></div>
      </li>
      <li>
        <div @click="configSharePic">分享图片</div>
      </li>
      <li>
        <div @click="callMask('show')">调起遮罩</div>
      </li>
      <li>
        <div @click="callMask('hide')">关闭遮罩</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Appbridge',
  data () {
    return {
      which: ''
    }
  },
  created () {
    window.search=function(){

    }
    window.rbtncb = ()=> alert('rbtncb')
    window.photocb = (base)=> {appendImg(base,this.which)}
    // this.jsbridge.setH5Header({title:'文章1',type:'normal',rbtn:{text:'菜单',cbname:'rbtncb',show:true},lbtn:{text:'菜单',cbname:'lbtncb',show:false}})
    // this.setTitle('hello')
  },
  methods: {
    callMask: function (type) {
      // alert('呼叫app照相机')
      // document.getElementById('aa').innerHTML += '开始'
      this.jsbridge.callMask(type)
    },
    appendImg: function (base, obj) {
      // obj.src = base
    },
    callImage: function (event, cbname) {
      // alert('呼叫app照相机')
      // document.getElementById('aa').innerHTML += '开始'

      this.jsbridge.callImage(cbname)
    },
    callCamera: function (event, cbname) {
      this.jsbridge.callCamera(cbname)
    },
    callPhotos: function (event, cbname) {
      this.jsbridge.callPhotos(cbname)
    },
    callAddress: function () {
      this.jsbridge.callAddress()
    },
    getDic: function () {
      this.jsbridge.setDictionary('gender').then(success => {
        // document.getElementById('dic').innerHTML = success['name'] +':'+ success['item']
        document.getElementById('dic').innerHTML = JSON.stringify(success)
      }, fail => {
        //alert(fail)
      }).catch(e => {
        //alert(e)
      })
    },
    configShare: function () {
      window.shareCallback = (res) => {
        if(!!res){
          alert('分享成功')
        }
      }
      this.jsbridge.shareConfig({
        img:'http://test.zhongan.com/images/001.png',
        title:'我是一个分享测试',
        desc:'传过去的图片地址是假的，不用试',
        link:'https://www.baidu.com',
        callback: 'shareCallback'
      })
    },
    configSharePic: function () {
      this.jsbridge.shareConfig({
        type:'image',
        link:'http://test.zhongan.com/images/001.png'
      })
    },
    showShare: function () {
      this.jsbridge.shareShow({
        img:'http://test.zhongan.com/images/001.png',
        title:'我是一个分享测试',
        desc:'传过去的图片地址是假的，不用试',
        link:'https://www.baidu.com'
      })
    },
    callLogout: function () {
      this.jsbridge.callLogout()
    },
    callSignin: function () {
      this.jsbridge.callSignin()
    },
    callLogin: function () {
      this.jsbridge.callLogin()
    }
  }
}
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  .jsapp-page{
    & > ul{
      padding:0;
      margin:0;
      & > li{
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
      }
    }
  }
</style>
