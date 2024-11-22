const input = document.querySelector("#inputText"); //select Input
const h1 = document.querySelector("#h1Text"); //select h1

//add event listener to input with value input
input.addEventListener("input", function (e) {
  h1.innerText = input.value; //change h1 by typing in input
});

const usernameInput = document.querySelector("#usernameText"); //select input
const h1Change = document.querySelector("#h1Username"); //select h1

//add event listener to input with value input
usernameInput.addEventListener("input", function () {
  if (usernameInput.value) {
    //check for value if empty go to else
    h1Change.innerText = `Welcome, ${usernameInput.value}  !`; //change h1 by typing
  } else {
    //if no entry show a text
    h1Change.innerText = "Enter Your Username";
  }
});
