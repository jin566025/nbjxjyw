import request from '@/utils/request.js'

export function login(data){
	return request({
		url:'/login',
		data:data,
		method:'post'
	})
}
export function test(data){
	return request({
		url:'/login',
		data:data,
		method:'post'
	})
}