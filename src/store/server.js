import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Qs from 'qs';
Vue.use(VueAxios,axios);
axios.defaults.baseURL="http://localhost:3334"
axios.defaults.timeout=24000;
axios.defaults.headers={ //设置相应头
	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	'Accept': 'application/json, text/plain'
}
axios.defaults.transformRequest=[
	d => { //对发送的数据进行处理
		d = d || {};
		return Qs.stringify(d)
	}
];

axios.interceptors.request.use(
	request=>{
		return request
	}
)
axios.interceptors.response.use(
	res=>{
		console.log('接口：')
		console.log(res.config.url)
		console.log('数据：')
		console.log(res.data)
		return res.data
	},
	err => {
		console.error(err)
	}
)
