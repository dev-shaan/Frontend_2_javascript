  
document.querySelector("button").addEventListener("click",function () {
  randomnumber1 = Math.floor(Math.random() * 6) + 1;
  randomnumber2 = Math.floor(Math.random() * 6) + 1;

  var randomdiceimage1 = "images/dice" + randomnumber1 + ".png";
  var randomdiceimage2 = "images/dice" + randomnumber2 + ".png";


  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomdiceimage1);
  
  // for second dice you can also write like this
  document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);

  gameplay();
  btnAnimate();


});

function btnAnimate(){
  document.querySelector("button").classList.add("pressed");
  setTimeout(function(){
    document.querySelector("button").classList.remove("pressed");   
  }, 100);

  var kick = new Audio("images/kick-bass.mp3");
  kick.play();

}


function gameplay(){
  
  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else {
  document.querySelector("h1").innerHTML = "Draw!";
  }
}
