////////////////////////////////////////////////////////////////
//                        A1
////////////////////////////////////////////////////////////////
// Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

let keys = [
  'id_book_one',
  'id_book_two',
  'id_book_three',
  'id_book_four',
  'id_book_five',
  'id_book_six',
  'id_book_seven',
  'id_book_eight',
  'id_book_nine',
  'id_book_ten',
];

let Image = {
  id_book_one: "img/Dari_1.jpg",
  id_book_two: "img/Dari_2.jpg",
  id_book_three: "img/Dari_3.jpg",
  id_book_four: "img/Dari_4.jpg",
  id_book_five: "img/Dari_5.jpg",
  id_book_six: "img/Dari_6.jpg",
  id_book_seven: "img/Dari_7.jpg",
  id_book_eight: "img/Dari_8.jpg",
  id_book_nine: "img/Dari_9.png",
  id_book_ten: "img/Dari_10.jpg",
};

console.log(keys);



(function() {
  // Get the <div> tag from the HTML page
  let div = document.getElementById("container");

  // h1 Tag
  let h1Tag = document.createElement("h1");
  h1Tag.innerHTML = "My Book page";
  h1Tag.className = 'myH1';

  div.append(h1Tag);

  // Create ul
  let ul = document.createElement("ul");
  ul.className = 'firstul';

  keys.forEach(function(fruit) {
    let li = document.createElement("li");

    li.innerHTML = fruit;
    ul.append(li);
  });
  container.append(ul);
})();

let information = {
  "id_book_one": {
    title: "a",
    language: "Dari1", //1
    author: "ac"
  },
  "id_book_two": {
    title: "b",
    language: "Dari2", //2
    author: "bc"
  },
  "id_book_three": {
    title: "c",
    language: "Dari3", //3
    author: "cb"
  },
  "id_book_four": {
    title: "d",
    language: "Dari4", //4
    author: "db"
  },
  "id_book_five": {
    title: "e",
    language: "Dari5", //5
    author: "eb"
  },
  "id_book_six": {
    title: "f",
    language: "Dari6", //6
    author: "fb"
  },
  "id_book_seven": {
    title: "g",
    language: "Dari7", //7
    author: "gb"
  },
  "id_book_eight": {
    title: "h",
    language: "Dari8", //8
    author: "hb"
  },
  "id_book_nine": {
    title: "i",
    language: "Dari9", //9
    author: "ib"
  },
  "id_book_ten": {
    title: "j",
    language: "Dari10", //10
    author: "jb"
  },
};

let ul = document.createElement("ul");
ul.className = 'ulClass';

keys.forEach(function(id) {
  let li = document.createElement("li");
  var mybr = document.createElement('br');
  li.innerHTML = information[id].title + ' ' + information[id].language + ' ' + information[id].author;

  let myImage = document.createElement("img");
  myImage.width = 200;
  myImage.src = Image[id];

  li.appendChild(mybr);
  li.appendChild(myImage);
  ul.append(li);
});
container.append(ul);