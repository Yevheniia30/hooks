import React, { Component } from 'react';
// import axios from 'axios';
import ImageItem from './ImageItem';
import SearchBar from '../SearchBar/SearchBar';
import fetchImages from '../../services/images-api';
import ImagesApi from '../../services/images-api';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
  };

  // запрос на API нужно сделать когда state (у нас searchQuery) обновился и не равен предідущему
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      fetchImages();
    }
  }

  onChangeQuery = query => {
    // при сабмите сохраняем значение инпута query в searchQuery
    // при сабмите сбрасываем значение page и очищаем результаты предыдущего поиска
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  //запрс на API вызывается при сабмите и при нажатии loadMore
  // fetchImages = () => {
  //   const { searchQuery, page } = this.state;
  //   const key = '16825213-7fb8f93f8fb61dc742d5122ac';
  //   axios
  //     .get(
  //       `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //     .then(res => {
  //       this.setState(prevState => ({
  //         // распыляем массив полученных данных поверх предыдущего массива
  //         images: [...prevState.images, ...res.data.hits],
  //         page: prevState.page + 1,
  //       }));
  //     });
  // };

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
        <button type="button" onClick={fetchImages}>
          Load more
        </button>
      </div>
    );
  }
}

export default ImageGallery;
