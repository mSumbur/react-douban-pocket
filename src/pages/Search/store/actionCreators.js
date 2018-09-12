import * as constants from './constants'
import fetchJsonp from 'fetch-jsonp'
import { getUrl } from '../../../api'

const setAction = (type, value) => ({
  type: constants[`SET_${type.toUpperCase()}`],
  value
})
/**
 * 第一个参数指定获取数据的类型
 * 第二个参数获取 url 参数。如果是字符，使用指定对象
 * @param {string, (string|object)} 
 */
export const getData = (type, objOrStr) => dispatch => {
  let urlParam = typeof objOrStr === 'string'
    ? {
      start: 0,
      count: 10,
      text: objOrStr,
      data: []
    }
    : objOrStr
  const url = getUrl(type, urlParam)
  console.log(url)
  fetchJsonp(url).then((res) => {
    res.json().then((data) => {
      urlParam.data.push(...(type === 'movie' ? data['subjects'] : data[type + 's']))
      urlParam.start += 10
      urlParam.count = data.total - urlParam.start >= 10 ? 10 : data.total - urlParam.start
      urlParam.default = false
      urlParam.error = false
      console.log(setAction(type, urlParam))
      dispatch(setAction(type, urlParam))
    })
  }).catch((e) => {
    console.log('error', e)
    console.log(urlParam)
    urlParam.error = true
    dispatch({type: constants.NO_NETWORK, dataType: type, value: urlParam})
  })
}