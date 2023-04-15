var scoreAPI = "https://score-api.sgmakarov.ru/rating/";

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


function setScore() {
  var a = document.getElementById("wallet-address");
  var walletAddress = a.value;
  var walletScore = getAddressScore(walletAddress);

  var scoreWrapper = document.getElementById("score-wrapper");
  var walletScoreText = document.getElementById("wallet-score");

  walletScoreText.innerText = walletScore.rating;
  scoreWrapper.style.display = "block";

}


document.getElementById("check-btn").addEventListener("click", setScore);
