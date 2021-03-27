import axios from 'axios';

const fetchImages = () => {
  const { searchQuery, page } = this.state;
  const key = '16825213-7fb8f93f8fb61dc742d5122ac';
  axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

export default { fetchImages };
