import request from "@/utils/request"

const api={
    register(param){
        return request('/user/users',param)
    },
    login(param){
        return request(`/user/login`,param)
    },
    approve(eve,type,nums,len){
        return request(`/app/approveAll?event=${eve}&type=${type}&start=${nums}&length=${len}`,{},'GET')
    },
    sell(param){
        return request('/app/spell',param,'PUT')
    }
    // approveAll(type,start,length){
    //     return request(`/app/approveAll?type${type}&start=${start}&length=${length}`,{},'GET')
    // }
}

export {api}