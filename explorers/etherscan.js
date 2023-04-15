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
  var b = document.getElementsByClassName("card-body d-flex flex-column gap-5")[0];
  var c = b.getElementsByClassName("text-cap mb-1")[1];

  var scoreDiv = document.createElement("div");
  var scoreH4 = document.createElement("h4");

  var scoreText = document.createTextNode("Address Score");
  scoreH4.appendChild(scoreText);
  scoreH4.className = "text-cap mb-1";
  scoreDiv.appendChild(scoreH4);

  var scoreText = document.createTextNode(String(addressScore.rating));

  scoreDiv.appendChild(scoreText);

  b.appendChild(scoreDiv);

}

var address = getMainAddress();
var score = getAddressScore(address);

console.log(address);
console.log(score.score);

setAddressScore(score);
