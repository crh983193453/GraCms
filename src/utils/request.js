import Axios from "axios";

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
			url:`http://10.129.3.115:8088'+${urls}`,
			data:param,
			method:methods?methods:'POST',
			success:(res)=>{
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}

export default service;
