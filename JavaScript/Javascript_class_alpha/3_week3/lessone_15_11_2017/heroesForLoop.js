function load(){
  // create two arrays that contain heroes with smart and strong abilities
  const strongHeroes = ['Thor', 'Hulk'];
  const smartHeroes = ['Spiderman', 'Captain America'];
  
  // create two ul elements for each ability and add them on the body
  // of the document
  const strongAbility = document.createElement('ul');
  strongAbility.setAttribute('class', 'strong');
  document.body.appendChild(strongAbility);
  const smartAbility = document.createElement('ul');
  smartAbility.setAttribute('class', 'smart');
  document.body.appendChild(smartAbility);
  
  // iterate over each array and create a li element for each hero. Add
  // each hero element as a child on the ability ul element.
  for(let i=0; i<strongHeroes.length; i++){
    const strong = document.createElement('li');
    strong.textContent = strongHeroes[i];
    strongAbility.appendChild(strong);
  }
  for(let i=0; i<smartHeroes.length; i++){
    const smart = document.createElement('li');
    smart.textContent = smartHeroes[i];
    smartAbility.appendChild(smart);
  }
}