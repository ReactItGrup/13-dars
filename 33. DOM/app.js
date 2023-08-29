// DOM

// D => Document
// O => Object
// M => Model

function color(z) {
  let a = getComputedStyle(z);
  let b = a.backgroundColor;
  document.getElementsByTagName("body")[0].style.backgroundColor = b;
}
