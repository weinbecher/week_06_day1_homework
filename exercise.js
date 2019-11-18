
var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];
// // 1. Loop through the array of movies and make each movie's title all capital letters.
//
// for (var movie of movies){
//   var uppercasedtitle = movie.title.toUpperCase();
//   console.log(uppercasedtitle)
// }
//
//
// // 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.
//
// for (var movie of movies){
//   if( movie.title === 'Citizen Kane'){
//   console.log(movie.year)}
// }
//

// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

// // fully control in the loop
// for (var i = 0; i < movies.length; i++){
// // initialize counter
// //i += 2
//   var currentMovie = movies[i];
//   console.log(currentMovie.title, currentMovie.ratings.audience);
// }



// Task: 20 minutes
//
// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

// function sum([num]){ total = 0;
//   var num of nums; total+= num;
//    return total}
// console.log('sum:', sum([1,2,3]))
//
//
// function calculateTotal(number){
//   var total = 0
//   for(var number of numbers){
//     total+= number
//   }
//   return total;
// }
//
// var sum = calculateTotal([1,2,3,4,5])
// console.log(sum)

// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Harrison', age: 25 }
// a string, for exmaple, 'name'
//
// var person = function(name,age){return `${name} , ${age}`}
//
// console.log('person:',person( 'Harrison', 25));


// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.
//
// person = {name:'Harrison'}
//
// function tureOrFalse(string){
//   if (string.key == true){
//     return true
//   }else{
//     return false
//   }
// }
//
var objectHasKey = function(object,string){
  for (var key in object){
    if (string === key){
      return true;
    }
  }
  return false;
}

var person = {
  name: 'Harrison',
  age: 30
};

var found= objectHasKey(person,'name')
var notFound = objectHasKey(person,'phone')

console.log(found)
// console.log('tureOrFalse:',trueOrFalse(person));
