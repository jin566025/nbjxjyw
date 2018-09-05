import request from '@/utils/request'

export function seaAdd(data){
	return request({
		url:'/seaAdd',
		method:'post',
		data:data
	})
}

export function seaAll(data){
	return request({
		url:'/seaAll',
		method:'post',
		data:data
	})
}

export function seaDelete(data){
	return request({
		url:'/seaDelete',
		method:'post',
		data:data
	})
}

export function seaById(data){
	return request({
		url:'/seaById',
		method:'post',
		data:data
	})
}

export function seaUpdate(data){
	return request({
		url:'/seaUpdate',
		method:'post',
		data:data
	})
}

export function seaImgAdd(data){
	return request({
		url:'/seaImgAdd',
		method:'post',
		data:data
	})
}

export function seaImgById(data){
	return request({
		url:'/seaImgById',
		method:'post',
		data:data
	})
}

export function seaImgUpdate(data){
	return request({
		url:'/seaImgUpdate',
		method:'post',
		data:data
	})
}
