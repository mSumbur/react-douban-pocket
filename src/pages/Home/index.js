import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3>口袋豆瓣</h3>
        <p>在口袋豆瓣应用我们可以获取（或者搜索获取）到豆瓣的图书，电影，音乐列表以及相关的详情信息</p>
        <Link to='/search/book'>
        <button>点击开始口袋豆瓣之旅</button>
        </Link>
      </div>
    )
  }
}

export default Home;