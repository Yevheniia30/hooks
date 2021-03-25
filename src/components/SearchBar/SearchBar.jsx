import { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  // изменение значения инпута
  handleSearch = e => {
    this.setState({ query: e.currentTarget.value });
  };

  // сабмит формы
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleSearch}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
