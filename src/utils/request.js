import Axios from "axios";
import config from "@/utils/config"
function service(urls,param,methods='POST'){
	console.log(config.baseUrl+`${urls}`)
	return new Promise((resolve,reject)=>{
		new Axios({
			url: config.baseUrl+`${urls}`,
			data:param,
			headers:{
				'chatSessionId':localStorage.getItem('session')==null?'':localStorage.getItem('session')
			},
			method:methods
		}).then((res)=>{
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
