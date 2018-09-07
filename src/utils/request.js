import axios from 'axios'
import store from '@/store'
import router from '@/router'
const request = axios.create({
	//baseURL: process.env.BASE_API,
	//baseURL:"http://21w5499t90.iask.in:13514/api/",
	baseURL:"api",
	
})



request.interceptors.request.use(function(config){
	//store.state.show=true
	//let token = localStorage.getItem("token");
// 	if(token){
// 		config.headers.Authorization = `${token}`
// 	}else{
// 		router.push({'path':"/login"});
// 	}
	store.state.loading.show=true;
	return config;
},function(error){
	return Promise.reject(error);
});

request.interceptors.response.use(function(response){
	//store.state.show=false
	if(response.data.success==false){
		//router.push({'path':"/login"})
	}
	store.state.loading.show=false;
	//store.dispatch('switch_loading');
	return response;
},function(error){
	return Promise.reject(error);
})

export default request