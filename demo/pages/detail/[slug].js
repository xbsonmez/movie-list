import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export const Detail = ({ movie }) => {
  const router = useRouter();

  return (
    <div className={styles.centerDetailBody}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Head>
      <div class="container">
        <div className={styles.customDetailCard}>
          <div className={styles.customDetailCardItem}>
            <div class="row">
              <div class="col">
                <img src={movie.Poster}></img>
              </div>
              <div className={styles.customDetailCardItemText}>
                <div class="col">
                  <div class="row">
                    <div class="col-3">Title</div>{" "}
                    <div class="col-9"> {movie.Title}</div>{" "}
                  </div>
                  <div class="row">
                    <div class="col-3">Year:</div>{" "}
                    <div class="col-9">{movie.Year}</div>
                  </div>
                  <div class="row">
                    <div class="col-3">Director:</div> 
                    <div class="col-9">
                    {movie.Director}
                    </div>
                  </div>
                <div class="row">
                  <div class="col-3">Actors:</div>
                  <div class="col-9">{movie.Actors}</div>
                </div>
                <div class="row">
                  <div class="col-3">Rewards:</div>
                  <div class="col-9">{movie.Rewards}</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const imdbID = pageContext.query.slug;
  const apiResponse = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.API_KEY}`
  );

  const movie = await apiResponse.json();
  return {
    props: {
      movie,
    },
  };
};

export default Detail;
