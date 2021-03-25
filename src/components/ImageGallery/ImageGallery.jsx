import React, { Component } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';
import SearchBar from '../SearchBar/SearchBar';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
  };

  // запрос на API нужно сделать когда state (у насsearchQuery) обновился и не равен предідущему
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    // при сабмите сохраняем значение инпута query в searchQuery
    this.setState({ searchQuery: query });
  };

  //запрс на API вызывается при сабмите и при нажатии loadMore
  fetchImages = query => {
    // запрос на API согласно ключевому слову в строке поиска
    const { page } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res => {
        this.setState(prevState => ({
          images: res.data.hits,
          page: prevState.page + 1,
        }));
      });
  };

  render() {
    const images = this.state.images;
    return (
      <div>
        <SearchBar onSubmit={this.onChangeQuery} />
        <h2>ImageGallery</h2>
        <ul>
          {images.map(({ id, webformatURL, tags }) => (
            <ImageItem key={id} webformatURL={webformatURL} tags={tags} />
          ))}
        </ul>
        <button type="button" onClick={this.fetchImages}>
          Load more
        </button>
      </div>
    );
  }
}

export default ImageGallery;
