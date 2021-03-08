import Axios from "axios";
import config from "@/utils/config"
// const service = axios.create({
// 	baseURL: configs.api_base_url,
// 	withCredentials: true,
// 	timeout: 15000,
// });
// service.interceptors.request.use(
// 	(config) => {
// 		if(localStorage.getItem("logintoken")){
// 			config.headers.Authorization = ("Bearer "+localStorage.getItem("logintoken"))
// 			return config;
// 		}else{
// 			return config
// 		}
// 	},
// 	(error) => {
// 		console.log(error);
// 		return Promise.reject(error);
// 	}
// );

// service.interceptors.response.use(
// 	(response) => {
// 		const res = response.data;
// 		return res
// 	},
// 	(error) => {
// 		this.$alert("网络出错", "失败", {
// 			confirmButtonText: "明白",
// 			callback: (action) => {
// 			},
// 		  });
// 		return Promise.reject(error);
// 	}
// );
function service(urls,param,methods){
	return new Promise((resolve,reject)=>{
		new Axios({
			url: config.baseUrl+`${urls}`,
			data:param,
			headers:{
				'Session':localStorage.getItem('session')==null?'':localStorage.getItem('session')
			},
			method:methods?methods:'POST',
		}).then((res)=>{
			console.log(res)
			resolve(res.data)
		}).catch((err)=>{
			reject(err)
		})
	}).catch((err)=>{
		// resolve{msg:}
		console.log(err)
	})
}

export default service;
