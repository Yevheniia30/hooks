import React, { Component } from 'react';
import axios from 'axios';
import ImageItem from './ImageItem';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    // запрос на API
    axios
      .get(
        'https://pixabay.com/api/?q=love&page=1&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(res => {
        console.log(res.data.hits);
        this.setState({ images: res.data.hits });
      })
      .catch(error => console.log(error));
  }

  render() {
    const images = this.state.images;
    return (
      <div>
        <h2>ImageGallery</h2>
        <ul>
          {images.map(image => (
            <ImageItem image={image} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
