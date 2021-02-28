import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

const MovieItem = ({movieItem}) => { 
    
    const router = useRouter();
    return(
        <div onClick={() => router.push(`/detail/${movieItem?.imdbID}`)} className={styles.itemInfo}> 
           <img src={movieItem.Poster} className={styles.gridImage}></img> 
            <div>{movieItem.Title} </div>
            <div>{movieItem.Year} </div>
            <div>{movieItem.Type} </div>
        </div>
    );
}

export default MovieItem;