let score = 0;

document.Load = incNumber();

function incNumber() {
  score = extractScoreFromString(document.cookie);
  setScoreText(score);
  console.log("function incnumber; " + score);
}



function extractScoreFromString(counter) {
  let array = counter.split(";");
  let scoreAsString = array[0].replace("score=", "");
  let scoreAsNumber = Number(scoreAsString);
  console.log("function date; " + scoreAsNumber);
  return scoreAsNumber;

}

function setScoreText(scoreNumber) {
  document.getElementById('score').innerHTML = scoreNumber;
}

function onCookieClick() {
  score++;

  setScoreText(score);

  document.cookie = "score=" + score + "; expires=Thu, 15 Feb 2018 12:00:00 UTC";
}