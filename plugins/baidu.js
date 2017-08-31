export default {
  baidu () {
    let _hmt = _hmt || [];
  	
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b58ddc525cfe5199ea05b77a87a721c2";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  	
  }
}
