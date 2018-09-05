import request from '@/utils/request'


export function goodAll(data){
	return request({
		url:"/goodAll",
		method:'post',
		data:data
	})
}
export function addGood(data){
	return request({
		url:"/addGood",
		method:"post",
		data:data
	})
}
export function deleteGood(data){
	return request({
		url:"/deleteGood",
		method:'post',
		data:data
	})
}

export function goodById(data){
	return request({
		url:"/goodById",
		method:'post',
		data:data
	})
}

export function updateGood(data){
	return request({
		url:"/updateGood",
		method:'post',
		data:data
	})
}
