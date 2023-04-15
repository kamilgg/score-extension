var scoreAPI = "https://score-api.sgmakarov.ru/rating/";

function getMainAddress() {
  var a = document.getElementById("mainaddress");
  return a.textContent;
}


function getAddressScore(mainAddress) {
  fetch(scoreAPI + mainAddress, {
    method: "GET",
    mode: "no-cors"
  })
  .then((response) => response.json())
  .then((json) => {
    return json;
  });
}

function setAddressScore(addressScore) {
  var b = document.getElementsByClassName("col-md-6 mb-3 mb-md-0")[0];
  var c = b.getElementsByClassName("card-body")[0];

  var hrSpace = document.createElement("hr");
  hrSpace.className = "hr-space";

  var scoreDiv = document.createElement("div");
  scoreDiv.className = "row align-items-center";

  var scoreTitle = document.createElement("div");
  scoreTitle.className = "col-md-4 mb-1 mb-md-0";

  var scoreValue = document.createElement("div");
  scoreValue.className = "col-md-8";

  var scoreText = document.createTextNode("Address Score");
  scoreTitle.appendChild(scoreText);

  var scoreText = document.createTextNode(String(addressScore.rating));

  scoreValue.appendChild(scoreText);

  scoreDiv.appendChild(scoreTitle);
  scoreDiv.appendChild(scoreValue);

  c.appendChild(hrSpace);
  c.appendChild(scoreDiv);

}

var address = getMainAddress();
var score = getAddressScore(address);

console.log(address);
console.log(score.score);

setAddressScore(score);
