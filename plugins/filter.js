import Vue from 'vue'
import address  from "~/config/address"

Vue.filter('imgCdn', function(val){
  if(val){
    return address.IMG_ADDRESS + val
  }else{
    return val;
  }
});
