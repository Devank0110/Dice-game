var random1 = Math.floor(6*Math.random()+1);
var random2 = Math.floor(6*Math.random()+1);

document.querySelector("button").addEventListener("click", clicker);

function clicker(){
  document.querySelector("img.img1").setAttribute("src","images/dice"+random1+".png")
  document.querySelector("img.img2").setAttribute("src","images/dice"+random2+".png")
  if (random1>random2) {
    document.querySelector("h1").textContent= "Player 1 Wins 🥰";
  } else if(random1 < random2) {
    document.querySelector("h1").textContent= "Player 2 Wins 🥰";
  }else{
    document.querySelector("h1").textContent= "Draw 😕";
  }
  setTimeout(location.reload.bind(location),2000);
}
