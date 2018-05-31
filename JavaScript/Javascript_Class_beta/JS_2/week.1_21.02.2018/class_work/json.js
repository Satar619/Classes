const me = {
  Name: "Abdulsatar",
  s: "hazara",
  age: 17
};


const myJSON = '{"firstname":"John", "lastname":"Tsevdos", "age":35, "address": { "city":"Athens", "street":"my street", "number":12 }, "isOlympiakos":true, "pet":null, "hobbies": ["football", "movies", "coding"]}';
const myObj = JSON.parse(myJSON);

console.log(myJSON);
console.log(typeof myJSON);
console.log(myObj);
console.log(typeof myObj);

movies JSON
fetch('https://api.myjson.com/bins/16ae2x')
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });