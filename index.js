function showHiddenOne() {
  let x = document.getElementById("show");
  let buttonImg = document.getElementById("buttonImg");

  // Get the computed value of the display property
  let displayStyle = window.getComputedStyle(x).getPropertyValue("display");

  if (displayStyle === "none") {
    x.style.display = "block";
    buttonImg.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    x.style.display = "none";
    buttonImg.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

// Call showHiddenOne() initially to hide the text when the page loads
showHiddenOne();

function showHiddenTwo() {
  let y = document.getElementById("showTwo");
  let buttonImgTwo = document.getElementById("buttonImgTwo");

  // Get the computed value of the display property for the correct element
  let displayStyle = window.getComputedStyle(y).getPropertyValue("display");

  if (displayStyle === "none") {
    y.style.display = "block";
    buttonImgTwo.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    y.style.display = "none";
    buttonImgTwo.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

// Call showHiddenOne() initially to hide the text when the page loads
showHiddenTwo();

function showHiddenThree() {
  let z = document.getElementById("showThree");
  let buttonImgThree = document.getElementById("buttonImgThree");

  // Get the computed value of the display property for the correct element
  let displayStyle = window.getComputedStyle(z).getPropertyValue("display");

  if (displayStyle === "none") {
    z.style.display = "block";
    buttonImgThree.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    z.style.display = "none";
    buttonImgThree.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

showHiddenThree();

function showHiddenFour() {
  let a = document.getElementById("showFour");
  let buttonImgFour = document.getElementById("buttonImgFour");

  // Get the computed value of the display property for the correct element
  let displayStyle = window.getComputedStyle(a).getPropertyValue("display");

  if (displayStyle === "none") {
    a.style.display = "block";
    buttonImgFour.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    a.style.display = "none";
    buttonImgFour.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

showHiddenFour();
