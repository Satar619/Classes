/*jshint esversion: 6 */
// SocialHackersCodeSchool github url
const url = 'https://api.github.com/orgs/SocialHackersCodeSchool/repos';

let link = document.getElementById('myButton');
link.addEventListener('click', function() {
  console.log(link);
  githuburl();
});

function githuburl() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const api_key = data.results;

      //    Elements
      const divtag = document.createElement('div');
      divtag.className = 'firstDiv';

      const divButtons = document.getElementById('DivButton');

      //  Elements appendChild
      document.body.appendChild(divtag);


      data.forEach(function(reposetory) {
        const buttontag = document.createElement('button');
        buttontag.className = 'buttontag';
        buttontag.innerHTML = (reposetory.name);
        divButtons.appendChild(buttontag);


        buttontag.addEventListener('click', function() {
          const buttontag = document.getElementById('divConainer');

          const info = document.getElementById('info');

          names(reposetory.name, info);

        });
      });
    });
}

function names(reposetory, info) {
  fetch(reposetoryName(reposetory))
    .then((response) => response.json())
    .then((repo) => {

      info.innerHTML = (JSON.stringify(repo));
    });
}

function reposetoryName(name) {
  return `https://api.github.com/repos/SocialHackersCodeSchool/${name}`;
}

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// SEARCHFORM

function lert(i) {
  const text = document.getElementById('thetext');
  const box = document.getElementById('searchTextBox');
  const info = document.getElementById('info');

  let url = reposetoryName(text.value);

  fetch(url)
    .then((response) => response.json())
    .then((repo) => {

      info.innerHTML = (JSON.stringify(repo));
    });
}