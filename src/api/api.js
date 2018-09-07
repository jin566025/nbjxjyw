import request from '@/utils/request'


export function pageList(url){
	return request({
		url:url,
		method:'get'
	})
}
export function zcfgList(){
	return request({
		url:"/jj/info/zcfgList",
		method:'get'
	})
}


export function gszdList(){
	return request({
		url:"/jj/info/gszdList",
		method:'get'
	})
}

export function nbggList(){
	return request({
		url:"/jj/info/nbggList",
		method:'get'
	})
}

export function tzggList(){
	return request({
		url:'jj/info/tzggList',
		method:'get'
	})
}

export function newsList(){
	return request({
		url:'/sys/news/list',
		method:'get'
	})
}

export function detailList(url){
	return request({
		url:url,
		method:'get'
	})
}

export function detail(url){
	return request({
		url:url,
		method:'get'
	})
}
export function login(params){
	return request({
		url:'general/access/login',
		method:'get',
		params:params
	})
}