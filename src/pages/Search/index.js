import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import BookCard from '../../common/BookCard';
import MovieCard from '../../common/MovieCard';
import MusicCard from '../../common/MusicCard';
import { 
  SearchList,
  SearchMore 
} from './style';

class Search extends PureComponent {

  constructor() {
    super();
    this.state = {
      show: false
    }
    this.getData = this.getData.bind(this);
    this.searchMore = this.searchMore.bind(this);
    this.clickSearchMore = this.clickSearchMore.bind(this);
  }

  render() {
    this.type = this.props.match.params.id;
    return (
      <React.Fragment>
        <SearchBar type={this.type} handleSearch={this.getData}/>
        <SearchList>
          {this.showContentList(this.type)}
          <SearchMore className={this.state.show ? 'show' : null} onClick={this.clickSearchMore}>
            {this.storage.get('count') ? '加载更多' : '暂无更多'}
          </SearchMore>
        </SearchList>
        <NavBar type={this.type} />
      </React.Fragment>
    )
  }
  // 搜索结果列表
  showContentList(type) {
    this.storage = this.props.search.get(type);
    this.data = this.storage.get('data').toJS();
    console.log(this.data)
    return this.data.map((item, index) => {
      switch (type) {
        case 'movie':
          return (
            <Link to={'/detail/movie/' + index} key={index}>
              <MovieCard content={item}/>
            </Link>
          )
        case 'music':
          return (
            <Link to={'/detail/music/' + index} key={index}>
              <MusicCard content={item}/>
            </Link>
          )
        default:
          return (
            <Link to={'/detail/book/' + index} key={index}>
              <BookCard content={item}/>
            </Link>
          )
      }
    })
  }
  /**
   * 搜索功能函数
   * @param {string} text 
   */
  getData(objOrStr) {
    console.log(this.type, objOrStr)
    this.props.getData(this.type, objOrStr);
    this.setState({
      show: false
    })
  }

  clickSearchMore() {
    this.getData(this.storage.toJS());
  }

  componentDidMount() {
    window.addEventListener('scroll', this.searchMore)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.searchMore)
  }

  searchMore(e) {
    if(e.target.documentElement.scrollTop && !this.state.show) {
      this.setState({ show: true })
    } 
  }

  // 添加下拉加载事件
  // componentDidMount() {
  //   window.addEventListener('scroll', this.getMoreData);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.getMoreData);
  // }
  /**
   * 下拉加载更多函数
   * @param {dom} e 
   */
  // getMoreData(e) {
  //   const doc = e.target.documentElement
  //   if (!this.state.isBottom && doc.clientHeight < doc.scrollHeight && doc.scrollTop + doc.clientHeight === doc.scrollHeight) {
  //     console.log('work get more')
  //     this.handleGetData(this.storage.toJS())
  //     this.setState({
  //       isBottom: true
  //     })
  //   }
  // }
}

const mapState = state => ({
  search: state.get('search')
})

const mapDispatch = dispatch => ({
  getData(type, objOrStr) { 
    console.log(type, objOrStr)
    dispatch(actionCreators.getData(type, objOrStr))
  }
})

Search = connect(mapState, mapDispatch)(Search);
export default Search;