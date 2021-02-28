import MovieItem from '../MovieItem/MovieItem';
import styles from '../../styles/Home.module.css'
import React from 'react';

export const Movie = ({ movie }) => {
if(movie === undefined){
    return(<div>No More Results Found</div>);
}
  return movie.map((item) => {
    return (
      <div className={styles.gridCustomItem}>
        <MovieItem movieItem={item} ></MovieItem>
      </div>
    );
  });
};

export default Movie;