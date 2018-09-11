import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BookPage from './components/BookPage';
import MoviePage from './components/MoviePage';
import MusicPage from './components/MusicPage';
import { 
  DetailPage,
  PageHeader,
  PageContent
} from './style';

class Detail extends PureComponent {

  static propTypes = {
    searchType: PropTypes.number,
    data: PropTypes.object,
    onClosePage: PropTypes.func
  }

  constructor() {
    super();
    this.contentTpl = null;
    this.defineContentTpl = this.defineContentTpl.bind(this);
  }

  render() {
    return (
      <DetailPage>
        <PageHeader>
          <Link to={'/search/' + this.type}>
            <span className="close">{'<' + this.typeName}</span>
          </Link>
          <span>{this.content.title}</span>
        </PageHeader>
        <PageContent>
          { this.contentTpl }
        </PageContent>
      </DetailPage>
    )
  }

  componentWillMount() {
    this.defineContentTpl()
  }

  defineContentTpl() {
    this.type = this.props.match.url.match(/book|movie|music/)[0];
    this.id = this.props.match.params.id;
    this.content = this.props.search.get(this.type).get('data').get(this.id).toJS();
    console.log(this.content)
    switch(this.type) {
      case 'book': 
        this.typeName = '图书';
        this.contentTpl = <BookPage content={this.content}/>
        break;
      case 'movie':
        this.typeName = '电影';
        this.contentTpl = <MoviePage content={this.content}/>
        break;
      case 'music':
        this.typeName = '音乐';
        this.contentTpl = <MusicPage content={this.content}/>
        break;
      default: 
        return ''
    }
  }
}

const mapState = state => ({
  search: state.get('search')
})

Detail = connect(mapState)(Detail)
export default Detail;