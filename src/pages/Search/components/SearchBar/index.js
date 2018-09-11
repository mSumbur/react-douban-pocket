import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  SearchWrapper,
  SearchInput,
  SearchButton
} from '../../style';

class SearchBar extends Component {

  static propTypes = {
    type: PropTypes.string,
    onChangeText: PropTypes.func
  }

  static defaultProps = {
    type: 0
  }

  constructor() {
    super();
    this.state = {
      inputValue: '',
      placeholderText: ''
    }
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
  setPlaceholder() {
    let text = null;
    switch(this.props.type) {
      case 'book':
       text = '书名、作者、ISBN'
        break;
      case 'movie':
       text = '电影、影人、影院、电视剧'
        break;
      case 'music':
        text = '唱片名、表演者、条码、ISRC'
        break;
      default: 
        return this.state.inputValue;
      }
    return text;
  }
    
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick() {    
    if(this.state.inputValue) {
      this.placeholderText = this.state.inputValue;
      this.props.handleSearch(this.state.inputValue);
      this.setState({
        inputValue: ''
      })
    } 
  }

  render () {
    return (
      <SearchWrapper>    
        <SearchInput placeholder={this.placeholderText ? this.placeholderText : this.setPlaceholder()} value={this.state.inputValue} onChange={this.handleInputChange}/>
        <SearchButton onClick={this.handleClick}>搜索</SearchButton>
      </SearchWrapper>
    )
  }
}

export default SearchBar;