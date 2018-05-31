const availableModules = ["JavaScript", "Git", "CommandLine", "React", "Node.js", "databases", "HTML-CSS"]
const reposContainer = document.querySelector('#repositories');
document.addEventListener('DOMContentLoaded', function(fetchAndAppendRepos) {
  fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(repositories) {
      var ava = repositories[0].owner.avatar_url;
      var img = document.createElement("img");
      img.src = "https://avatars3.githubusercontent.com/u/32015010?v=4";
      document.body.appendChild(img);
      img.width = "150";

      console.log(repositories);
      var ul = document.createElement("ul");

      document.body.appendChild(ul);
      for (i = 0; i < repositories.length; i++) {
        if (showme(repositories[i].name, availableModules)) {
          var li = document.createElement('li');
          li.innerHTML =
            `<h3>${repositories[i].name}</h3>
            <p>Stargazers count: ${repositories[i].stargazers_count}</p>
               <p>Watchers: ${repositories[i].watchers}</p>
               <p>Forks: ${repositories[i].forks}</p>
               <p>Language: ${repositories[i].language}</p>`;
          ul.appendChild(li);
        }
      }
    });
});
var showme = function(repositories, availableModules) {
  return availableModules.indexOf(repositories) >= 0;
};

var avatar_url;


function p(repositories) {
  var Ptag = document.createElement('p');
  Ptag.innerHTML = repositories;
  document.body.appendChild(Ptag);
}
//              Ul Element
function ulelement(repositoies, ul) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = repositories;
}

////////////////////////////////////////////////////////////////////////////////
//
// const reposContainer = document.querySelector('#repositories');
// document.addEventListener('DOMContentLoaded', function(fetchAndAppendRepos) {
//   fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function(repositories) {
//       console.log(repositories);
//       repositories.forEach(function(repository) {
//         console.log(repository.name);
//       });
//       let newReposUl = document.createElement("ul");
//       newReposUl.setAttribute('class', 'repos');
//       document.body.appendChild(newReposUl);
//       newReposUl.innerHTML = ` < h1 > SHA Repositories < /h1>`;
//       repositories.forEach(function(repository) {
//         let newReposli = document.createElement("li");
//         newReposli.setAttribute('class', 'repo');
//         newReposli.innerHTML = `<h3>${repository.name}</h3>`;
//         newReposUl.appendChild(newReposli);
//       });
//       repositories.forEach(function(p) {
//         let repositoryName = document.createElement("p");
//         // repositoryName.setAttribute('class','RepoName');
//         repositoryName.innerHTML = p.name;
//         document.body.appendChild(repositoryName);
//       });
//     });
// });