import React, { Component } from 'react'

export default class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(e) {
    this.setState({
        keyword: e.target.value
      });
    this.props.searchNotes(e.target.value);
  }

  render() {
    return (
      <input type="search" className="header__search-input" placeholder='Cari catatan...' value={this.state.keyword} onChange={this.onKeywordChangeHandler} />
    )
  }
}
