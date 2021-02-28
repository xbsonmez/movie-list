import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import React , { useState } from 'react';
import { useRouter } from 'next/router';


export default function Search({movie,movie2,pageNumber,textProp}) {

  const router = useRouter();
  const [searchText, setSearchText] = useState(textProp); 

  const sendDataToParent = (text) => { 
    setSearchText(text);
    router.push(`/${text}`);
  };
  let arrayConcate = undefined;
    if(movie && movie.Search && movie.Search.length>0  && movie2 && movie2.Search && movie2.Search.length>0){
        arrayConcate = [...movie?.Search,...movie2?.Search];
    }else if (movie && movie.Search && movie.Search.length>0) {
        arrayConcate = [...movie.Search];
    }else if(movie2 && movie2.Search && movie2.Search.length>0){
        arrayConcate = [...movie2.Search];
    }
  
  return (
  <div className={styles.customBody}>
    <div className={styles.customHeader}>
    <Header sendDataToParent={sendDataToParent}></Header> 
    </div>
    <div className={styles.gridCustom}>
     <Movie movie={arrayConcate}  ></Movie>
     </div>
     <div className={styles.paginator}>
       <div 
       onClick={()=>{
           if(pageNumber>1){
            router.push(`/${searchText}?page=${parseInt(pageNumber)-1}`).then(window.scrollTo(0,0));
           }
       }}
       className={pageNumber===1 ? styles.disabled:styles.active}>
           {parseInt(pageNumber)-1>0 ?'<':''}{parseInt(pageNumber)-1>0 ? parseInt(pageNumber)-1 : ''}
       </div>
        <div className={styles.selectedPage}>#{pageNumber}</div>
        <div 
       onClick={()=>{
            router.push(`/${searchText}?page=${parseInt(pageNumber)+1}`).then(window.scrollTo(0,0));
       }}
       className={arrayConcate === undefined ? styles.disabled:styles.active}  >
          {parseInt(pageNumber)+1} {'>'}
       </div>

     </div>
  </div>
   
  )
}

export const getServerSideProps = async pageContext => {
  const searchValue = pageContext.query.text;
  const pageNumber = pageContext.query.page?pageContext.query.page:1;

  const apiResponse = await fetch(
    `http://www.omdbapi.com/?s=${searchValue}}&page=${pageNumber}&apikey=${process.env.API_KEY}`,
  );
  const apiResponse2 = await fetch(
    `http://www.omdbapi.com/?s=${searchValue}&page=${pageNumber+1}&apikey=${process.env.API_KEY}`,
);

  const movie = await apiResponse.json();
  const movie2 = await apiResponse2.json();

  return{
      props:{
          movie: movie,
          movie2:movie2,
          pageNumber:pageNumber,
          textProp:searchValue
      }
  }
};





