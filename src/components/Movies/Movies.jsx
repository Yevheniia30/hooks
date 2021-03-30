import { Component } from 'react';
import moviesApi from '../../services/movies-api';

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    // moviesApi
    //   .fetchMovies()
    //   .then(movies => {
    //     this.setState({
    //       movies: movies,
    //     });
    //     console.log(movies);
    //   })
    //   .catch(error => error.msg)
    //       .finally();

    moviesApi
      .fetchByKeyWord()
      .then(movies => {
        this.setState({
          movies: movies,
        });
        console.log(movies);
      })
      .catch(error => error.msg)
      .finally();
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map(({ id, poster_path, title }) => (
            <li key={id}>
              <h2>{title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
