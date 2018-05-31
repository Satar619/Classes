// constants
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bc50218d91157b1ba4f142ef7baaa6a0';
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

const movies = [
  'The Mask',
  'Last night',
  'Thor Ragnarok',
  'Justice League',
  'Braveheart',
  'Taxi driver',
  'The godfather'
]

// video club customers
const customers = [
  'Ahmed',
  'Satar',
  'George',
  'Kostas',
  'Dimitris'
];

function fetchMovieDetails(query, callback) {
  return fetch(`${BASE_API_URL}search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
    .then((response) => response.json())
    .then((json) => callback(null, json))
    .catch((err) => callback(err));
}

console.time('timer');
let customersServed = 0;
for (let i = 0; i < customers.length; i += 1) {
  const customer = customers[i];
  const x = Math.floor(Math.random() * movies.length);
  const movie = movies[x];

  console.log(`- ${customer}: Do you have ${movie}?`);
  fetchMovieDetails(movie, function(err, obj) {
    customersServed += 1;
    const result = obj.results[0];
    let greeting;
    if (result.vote_average > 7) {
      greeting = 'Excellent choice';
    } else {
      greeting = 'Fair enough';
    }
    console.log(`- Teller: ${greeting} ${customer}, ${result.title} [${result.vote_average}/10] is available`);

    if (customersServed === customers.length) {
      console.timeEnd('timer');
    }
  });
}