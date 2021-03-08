import request from "@/utils/request"

const api={
    register(param){
        return request('/user/users',param)
    },
    login(param){
        return request(`/user/login`,param)
    }
}

export {api}