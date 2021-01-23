document.body.style.border = "5px solid red";
// console.log(document.getElementById("right"));

function getNumber(id) {
  let content = document.getElementById(id);
  let full = content.getElementsByClassName("sedy");
  if (full.length === 0) {
    return null;
  } else {
    return full[0].innerHTML;
  }
}

let number = getNumber("right");
if (number) {
  console.log(number);
} else {
  console.log("Box is empty");
}

let arr = [];
for (let i = 0; i < 81; i++) {
  let r;
  if (i == 0) {
    r = getNumber(`right`);
  } else {
    r = getNumber(`right${i}`);
  }

  if (r) {
    arr.push(Number(r));
  } else {
    arr.push(0);
  }
}

let sudoku = [];
let s = 0;
for (let a = 0; a < 9; a++) {
  sudoku[a] = [];
  for (let b = 0; b < 9; b++) {
    sudoku[a].push(arr[s]);
    s++;
  }
}

console.log(JSON.stringify(sudoku));
