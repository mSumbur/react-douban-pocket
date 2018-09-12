const getUrl = (type, objOrStr) => {
  // const temp = typeof objOrStr === 'string'
  //   ? {
  //     start: 0,
  //     count: 10,
  //     text: objOrStr
  //   }
  //   : objOrStr
  const temp = objOrStr;
  // 设置url
  let url = `https://api.douban.com/v2/${type}`
  // 设置搜索用户输入或豆瓣TOP250
  url += temp.text === 'top250'
    ? '/top250?'
    : `/search?q=${temp.text}&`
  // 设置 url 起始 start 字段和数量 count 字段
  url += `start=${temp.start}&count=${temp.count}`
  return url
}

export { getUrl }
