const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {
//   const rawList = moviesArray.map((movie) => movie.director);
//   const cleanList = rawList.filter((director, index) => {
//     return rawList.indexOf(director) == index;
//   });
//   return cleanList;
// }
// console.log(getAllDirectors(movies));

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steven = movies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes('Drama'));
  return dramaMovies;
}

// const howManyMovies2 = (moviesArray) => {
//   const steven = moviesArray.filter((movieItem) => {
//     return movieItem.director === 'Steven Spielberg';
//   });
//   const dramaMovies = steven.filter((spielbergMovie) => {
//     return spielbergMovie.genre.includes('Drama');
//   });
//   return dramaMovies;
// };
// console.log(howManyMovies2(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  const scores = moviesArray.map((movie) => movie.score);
  let scoresSum = 0;
  scores.forEach((scores) => {
    scoresSum += scores;
  });
  const avgScore = scoresSum / scores.length;
  return avgScore.toFixed(2);
};

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}
const dramaMoviesScore = (moviesArray) => {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  return scoresAverage(dramaMovies);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}
const orderByYear = (moviesArray) => {
  const orderedMovies = moviesArray.sort((a, b) => {
    return a.year - b.year;
  });
  return orderedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}
const orderAlphabetically = (moviesArray) => {
  const orderedByTitle = moviesArray.sort((a, b) => {
    return a.title - b.title;
  });
  const titlesOrdered = orderedByTitle.map((movie) => movie.title);
  const firstTitlesOrdered = titlesOrdered.slice(0, 20);
  return firstTitlesOrdered;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}
const turnHoursToMinutes = (moviesArray) => {};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     getAllDirectors,
//     howManyMovies,
//     scoresAverage,
//     dramaMoviesScore,
//     orderByYear,
//     orderAlphabetically,
//     turnHoursToMinutes,
//     bestYearAvg
//   };
// }
