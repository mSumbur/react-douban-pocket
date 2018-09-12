import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import BookCard from '../../common/BookCard'
import MovieCard from '../../common/MovieCard'
import MusicCard from '../../common/MusicCard'
import {
  SearchMore,
  SearchList,
  Tip
} from './style'

class Search extends PureComponent {
  constructor () {
    super()
    this.state = {
      show: false
    }
    this.getData = this.getData.bind(this)
    this.getDefaultData = this.getDefaultData.bind(this)
    this.clickSearchMore = this.clickSearchMore.bind(this)
  }

  getDefaultData () {
    console.log(this.storage.default)
    if(!this.storage.error && this.storage.default) {
      this.getData(this.storage);
    }
  }

  render () {
    // url 参数设定页面的显示类型
    this.type = this.props.match.params.id
    // 获取当前页面类型的存储对象
    this.storage = this.props.search[this.type]
    this.getDefaultData()
    return (
      <React.Fragment>
        <SearchBar type={this.type} handleSearch={this.getData} />
        <SearchList>
          {this.showContentList(this.type)}
          <SearchMore className={this.state.show ? 'show' : null} onClick={this.clickSearchMore}>
            {this.storage.count ? '加载更多' : '暂无更多'}
          </SearchMore>
        </SearchList>
        <NavBar type={this.type} />
      </React.Fragment>
    )
  }
  // 搜索结果列表
  showContentList (type) {
    // 显示的搜索结果
    const { error, data } = this.storage
    if(error) {
      return <Tip>'请刷新重试'</Tip>
    } else if (!data.length) {
      return <Tip>'无数据'</Tip>
    } else if (data.length >= 10) {
      this.setState({ show: true })
    }
    console.log(data.length)
    return data.map((item, index) => {
      switch (type) {
        case 'movie':
          return (
            <Link to={'/detail/movie/' + index} key={index}>
              <MovieCard content={item} />
            </Link>
          )
        case 'music':
          return (
            <Link to={'/detail/music/' + index} key={index}>
              <MusicCard content={item} />
            </Link>
          )
        default:
          return (
            <Link to={'/detail/book/' + index} key={index}>
              <BookCard content={item} />
            </Link>
          )
      }
    })
  }
  /**
   * 调用 props 的搜索函数，参数是对象的话是加载更多，参数是字符的话搜索字符
   * @param {(string|object)} objOrStr
   */
  getData (objOrStr) {
    this.props.getData(this.type, objOrStr)
    this.setState({
      show: false
    })
  }

  clickSearchMore () {
    this.getData(this.storage)
  }
}

const mapState = state => ({
  search: state.get('search').toJS()
})

const mapDispatch = dispatch => ({
  getData (type, objOrStr) {
    console.log(type, objOrStr)
    dispatch(actionCreators.getData(type, objOrStr))
  }
})

Search = connect(mapState, mapDispatch)(Search)
export default Search
