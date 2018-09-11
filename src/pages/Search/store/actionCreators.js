import * as constants from './constants';
import fetchJsonp from 'fetch-jsonp';
import { getUrl } from '../../../api';

const setAction = (type, value) => ({
  type: constants[`SET_${type}`],
  value
})

/**
 * 第一个参数指定获取数据的类型 
 * 第二个参数获取 url 参数。如果是字符，使用指定对象
 * @param {string} type 
 * @param {object, string} objOrStr 
 */
export const getData = (type, objOrStr) => dispatch => {
  const url = getUrl(type, objOrStr)
  console.log(url)
  if (url.match(/count=[0-9]*/)[0].match(/\D/)[0]) {
    let storage = typeof objOrStr === 'string' 
      ? { 
          start: 0,
          count: 10,
          text: objOrStr,
          data: [] } 
      : objOrStr;
    fetchJsonp(url).then((res) => {
      res.json().then((data) => {
        storage.data.push(...(type === 'movie' ? data['subjects'] : data[type + 's']));
        storage.start += 10;
        storage.count = data.total - storage.start >= 10 ? 10 : data.total - storage.start;
        storage.total = data.total;
        console.log(setAction(type.toUpperCase(), storage))
        dispatch(setAction(type.toUpperCase(), storage))
      })
    }).catch((e) => (
      console.log('error', e)
    ))
  }
}