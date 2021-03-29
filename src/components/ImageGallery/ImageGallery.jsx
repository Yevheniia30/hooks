import React, { Component } from 'react';
import ImageItem from './ImageItem';
import SearchBar from '../SearchBar/SearchBar';
// import fetchImages from '../../services/images-api';
// import fetchImgs from '../../services/images-api';
import imagesApi from '../../services/images-api';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;

    const options = {
      page,
      searchQuery,
    };

    imagesApi.fetchImages(options).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
      // плавный скролл стр когда приходит новые изображения
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onChangeQuery} />
        <ul>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              // onImgClick={onImgClick}
            />
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
