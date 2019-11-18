var sports = ['football', 'tennis', 'rugby'];

var numberOfElements = sports.length;

// console.log('number of elements:', numberOfElements);

var firstSport = sports[0];
// console.log('first sport:', firstSport);
var secondSport = sports[1];
// console.log('second sport:', secondSport);

sports.push('curling');
sports.push('snooker');
sports.push('darts');

// console.log('sports', sports);
// removedSport = sports.pop();
// console.log('sports', sports);
// console.log('removed sports', removedSport);
//
sports.unshift('basketball');
console.log('sports', sports);

var removedSport = sports.shift();
// console.log('sports', sports);
// console.log('removedSport', removeSport);
//
var removedSport = sports.splice(3,1);
// the first number is the index , second is the number of elements to remove
var removedSport = sports.splice(3,1, 'chess boxing', 'running');
// splice(index, delete count, insert)

// console.log(sports)
// console.log('removedSport', removedSport);

// // for loop
// for (var currentSport of sports){
//   var uppercasedSport = currentSport.toUpperCase();
//   console.log(uppercasedSport);
// }


// for (var i = 0; i < sports.length; i++){
// // initialize counter
// //i += 2
//   var currentSport = sports[i];
//   var uppercasedSport = currentSport.toUpperCase();
//   console.log(uppercasedSport);
// }


var movie = {
  title: 'It\'s a Wonderful Life',
  year: 1946,
  language : 'Spanish'
};
// console.log('movie:', movie)

var title = movie.title;
// console.log('title:', title);

movie.cast = ['James Stewart', 'Donna Reed'];
// console.log('movie:', movie)

movie.language = 'English';

//. notation
//
movie['subtitle-language'] = 'French';
var propertyToAcess = 'subtitle-language';
console.log('movie:', movie[propertyToAcess]);
// !!! notworking
// console.log(movie.propertyToAcess);


// delete movie.year;
// console.log(movie);


movie.ratings = {
  critic: 94,
  audience:95
};

console.log(movie);

var audienceRating = movie.ratings.audience;

for (var key in movie){
  var value = movie[key];
  // console.log(`the ${key} is ${value}`);
}

// console.log(audienceRating);


//when use in when use for

var keys = Object.keys(movie);
// return all the keys
console.log(keys);
