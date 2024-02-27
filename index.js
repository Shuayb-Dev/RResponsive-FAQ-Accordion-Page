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
