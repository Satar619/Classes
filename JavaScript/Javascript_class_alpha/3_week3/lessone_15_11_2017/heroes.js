function load(){
  // Change the text content of an existing h1 header element  
  const title = document.getElementsByTagName('h1')[0];
  title.textContent = 'Marvel Heroes';
  
  createStrongHeroes();
  
  createSmartHeroes();
  
  // Override the styles of a hero element after it has been added on the body
  // of the document
  var ironman = document.createElement('p');
  ironman.textContent = 'Iron Man';
  ironman.setAttribute('class', 'smart');
  document.body.appendChild(ironman);
  ironman.style.backgroundColor = 'black';
  ironman.style.color = 'yellow';
}

/*
Create two strong hero elements and add them on the body of the document
*/
function createStrongHeroes(){
  const thor = document.createElement('p');
  thor.textContent = 'Thor';
  thor.setAttribute('class', 'strong');
  document.body.appendChild(thor);
  
  const hulk = document.createElement('p');
  hulk.textContent = 'Hulk';
  hulk.setAttribute('class', 'strong');
  document.body.appendChild(hulk);
}

/*
Create two smart hero elements and add them on the body of the document
*/
function createSmartHeroes(){
  var spiderman = document.createElement('p');
  spiderman.textContent = 'Spiderman';
  spiderman.setAttribute('class', 'smart');
  document.body.appendChild(spiderman);
  
  var cpt = document.createElement('p');
  cpt.textContent = 'Captain America';
  cpt.setAttribute('class', 'smart');
  document.body.appendChild(cpt);
}