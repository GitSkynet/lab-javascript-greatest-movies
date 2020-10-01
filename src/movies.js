// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    return array.map(function (movie) {
      return movie.director;
    });
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function filtra(array) {
    return array.filter(function (director, index) {
      return index === array.indexOf(director);
    });
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (arr) => {

  let filteredArr = arr.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"))

  return filteredArr.length;
};


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr){
  if(arr.length===0) {
    return 0;
  }
  let reducedArr = arr.reduce(function(acc, current){
    let updatedAcc = acc + current.rate;
    return updatedAcc;
  }, 0);

  let avgArr = reducedArr / arr.length;
  return (Math.round(avgArr * 100)) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramamov = array.filter(function (movies) {
    return movies.genre.includes('Drama');
  });
  
  let dramaSum = dramamov.reduce((acc, curr) => {
    return acc + curr.rate;
  }, 0);

  let avgDrama = Math.round(dramaSum / dramamov.length);
  return avgDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  return arr.map(function (movie) {
    return movie.year;
  });
  orderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let newarray = [];
  newarray = array.map(function (movie) {
    if (array.length > 20) {
      return movie.title[(0, 20)];
    }
    return movie.title;
  });
  return newarray.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (array){
  let array2=[];
  
  return array2;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array){
  if(array===0){
    return null;
  }

}