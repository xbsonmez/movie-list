import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import React , { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home({movie,movie2}) {
  const router = useRouter();

  const [searchText, setSearchText] = useState(null); 

  const sendDataToParent = (text) => { 
    if(text){
    setSearchText(text);
    router.push(`/${text}`);
    }
  };

  let arrayConcate = [...movie?.Search,...movie2?.Search];
  
  return (
  <div className={styles.customBody}>
    <div className={styles.customHeader}>
    <Header sendDataToParent={sendDataToParent}></Header> 
    </div>
    <div className={styles.gridCustom}>
     <Movie movie={arrayConcate}  ></Movie>
     </div>
  </div>
   
  )
}

export const getServerSideProps = async pageContext => {
  
  const searchText = 'null';
  const apiResponse = await fetch(
    `http://www.omdbapi.com/?s=${searchText}&page=1&apikey=${process.env.API_KEY}`,
  );
  const apiResponse2 = await fetch(
    `http://www.omdbapi.com/?s=${searchText}&page=2&apikey=${process.env.API_KEY}`,
);

  const movie = await apiResponse.json();
  const movie2 = await apiResponse2.json();
  
  return{
      props:{
          movie: movie,
          movie2:movie2
      }
  }
};





