## how to run

First, run the development server:

I used a next.js for SSR.


```bash
npm run dev
# or
yarn dev
```

if there was a problem because of  npm version,  npm version should be   6.13.7

- npm install

-my api  key in  env
    * .env => API_KEY
  
- npm run dev

## Detail of the project


-The MainPage is  index.js
    *I got only 20 movies from api so there has not pagination in this page.

-[text].js is a result page when user searched this page working.
    *This page shows  20 movies.
    *Added pagination.

-[slug].js is a movie detail  page.
    *bootstrap used.

-components
    -Header
        *Search component.
        *turkish char controlled

    -Movie 
        *grid movies ,  each movies mapped and displayed.

    -MovieItem
      * each movie in the grid design.
  

## As A Result
-used bootstrap and native css.
-Webpack used.
-Fetch used to get data
-Totally ı spent  6 hours to develop
-Readme.md and Readme-b
