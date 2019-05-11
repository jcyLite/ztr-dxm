import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
    	uid:'',
    	uname:'',
    	avatar:'',
      activeType: null
   },
   mutations:{
   	changeUid(a){
   		alert(11);
   	}
   }
  })
}
