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

    document.cookie = "score=" + score + "; expires=Thu, 25 Feb 2018 12:00:00 UTC";

    //   get and post httpobject
    let httpobject = {
      name: "Satar",
      clicks: score
    };
    console.log(httpobject);
    // end of, get and post httpobject
    sendToHttpServer(httpobject);
  }

  //
  function sendToHttpServer(object) {
    fetch("http://192.168.0.246:4567/cookies", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(object)
      })
      // convert the response in to a javascript object
      .then(res => res.json())
      // console log te response.
      .then(res => console.log(res))

    ;
  }