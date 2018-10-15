//aes加密，传入参数是字符转或者对象
import {CryptoJS} from 'src/widget/plugin/algorithmaes'
(function () {
  function install (Vue) {
    Vue.Aescode = Vue.prototype.Aescode = {
      //加密
      encrypt(word) {
        if(typeof (word) == 'number'){
          console.log(999)
          word = word.toString()
        }
        if(!word){
          return word
        }
        var key = CryptoJS.enc.Utf8.parse("1234567890000010"); //16位
        var iv = CryptoJS.enc.Utf8.parse("1234567890000010");
        var encrypted = '';
        if (typeof (word) == 'string') {
          var srcs = CryptoJS.enc.Utf8.parse(word);
          encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
        } else if (typeof (word) == 'object') {//对象格式的转成json字符串
          data = JSON.stringify(word);
          var srcs = CryptoJS.enc.Utf8.parse(data);
          encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          })
        }
        return encrypted.ciphertext.toString();
      },
      //解密
      decrypt(word) {
        if(!word)return
        var key = CryptoJS.enc.Utf8.parse("1234567890000010");
        var iv = CryptoJS.enc.Utf8.parse("1234567890000010");
        var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        var decrypt = CryptoJS.AES.decrypt(srcs, key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
        var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
      },
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