let baseUrl1 = "http://10.0.30.xxx"; //地址1
let baseUrl2 = "http://10.0.31.xxx"; //地址2

if (process.env.NODE_ENV === "production") {
	baseUrl1 = baseUrl2 = "http://xxx.xx.com"
}

export default {
	baseUrl1,
	baseUrl2
}
