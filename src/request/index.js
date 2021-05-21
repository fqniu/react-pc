import axios from 'axios'
import qs from qs
import urls from './urls'

// 请求拦截器
axios.interceptors.request.use(config => {
  if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
    config.data = qs.stringify(config.data);
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(response => response.data)

/**
 * @description 封装的get请求的方法
 * @param {*} url 请求的地址
 * @param {*} data  请求的数据
 * @returns 数据请求的promise对象
 */
function getRequest(url, data) {
  return axios.get(url, {
    params: data
  })
}

/**
 * @description 封装post请求的方法
 * @param {*} url 请求的地址
 * @param {*} data 请求的数据
 * @returns 数据请求的promise对象
 */
function postRequest(url, data) {
  return axios.post(url, data)
}

export default {
  ...urls,
  getRequest,
  postRequest
}

// props:{
//   model:{
//     type: Object,
//     default: () => {
//       return {
//         ruDesign:{
//           xxx:"0",
//           xxx:"0"
//         }
//       }
//     }
//   }
// }
