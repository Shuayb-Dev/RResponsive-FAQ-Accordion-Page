function showHiddenOne() {
  let x = document.getElementById("show");
  let buttonImg = document.getElementById("buttonImg");

  if (x.style.display === "none") {
    x.style.display = "block";
    buttonImg.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    x.style.display = "none";
    buttonImg.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

function showHiddenTwo() {
  let y = document.getElementById("showTwo");
  let buttonImgTwo = document.getElementById("buttonImgTwo");

  if (y.style.display === "none") {
    y.style.display = "block";
    buttonImgTwo.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    y.style.display = "none";
    buttonImgTwo.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

function showHiddenThree() {
  let z = document.getElementById("showThree");
  let buttonImgThree = document.getElementById("buttonImgThree");

  if (z.style.display === "none") {
    z.style.display = "block";
    buttonImgThree.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    z.style.display = "none";
    buttonImgThree.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}

function showHiddenFour() {
  let a = document.getElementById("showFour");
  let buttonImgFour = document.getElementById("buttonImgFour");

  if (a.style.display === "none") {
    a.style.display = "block";
    buttonImgFour.src = "imgs/icon-minus.svg"; // Display the minus image
  } else {
    a.style.display = "none";
    buttonImgFour.src = "imgs/icon-plus.svg"; // Display the plus image
  }
}
