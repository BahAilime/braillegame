let b = document.querySelectorAll(".braille_btn");
let v = document.querySelector(".valid");
let newl = document.querySelector(".new");
let retry = document.querySelector(".retry");
let reveal = document.querySelector(".reveal");
let target = document.querySelector("#target");

let score = 0;

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const ans = document.querySelector(".ans");
const bg = document.querySelector(".modal_bg");
function openYes() {
  yes.style.visibility = "visible";
  bg.style.visibility = "visible";
}

function openNo() {
  no.style.visibility = "visible";
  bg.style.visibility = "visible";
}

function openAnswer() {
  ans.style.visibility = "visible";
  bg.style.visibility = "visible";
}

function close() {
  yes.style.visibility = "hidden";
  no.style.visibility = "hidden";
  bg.style.visibility = "hidden";
  ans.style.visibility = "hidden";
  for (const elt of b) {
    elt.classList.toggle("dot", false);
  }
}

const l2b = {
  "0": "⠴",
  "1": "⠂",
  "2": "⠆",
  "3": "⠒",
  "4": "⠲",
  "5": "⠢",
  "6": "⠖",
  "7": "⠶",
  "8": "⠦",
  "9": "⠔",
  A: "⠁",
  B: "⠃",
  C: "⠉",
  D: "⠙",
  E: "⠑",
  F: "⠋",
  G: "⠛",
  H: "⠓",
  I: "⠊",
  J: "⠚",
  K: "⠅",
  L: "⠇",
  M: "⠍",
  N: "⠝",
  O: "⠕",
  P: "⠏",
  Q: "⠟",
  R: "⠗",
  S: "⠎",
  T: "⠞",
  U: "⠥",
  V: "⠧",
  W: "⠺",
  X: "⠭",
  Z: "⠵",
  "]": "⠻",
  "#": "⠼",
  Y: "⠽",
  ")": "⠾",
  "=": "⠿"
};

const b2n = {
  "⠴": "245",
  "⠂": "2",
  "⠆": "23",
  "⠒": "25",
  "⠲": "256",
  "⠢": "26",
  "⠖": "235",
  "⠶": "2356",
  "⠦": "236",
  "⠔": "35",
  "⠁": "1",
  "⠃": "12",
  "⠉": "14",
  "⠙": "145",
  "⠑": "15",
  "⠋": "124",
  "⠛": "1245",
  "⠓": "125",
  "⠊": "24",
  "⠚": "245",
  "⠅": "13",
  "⠇": "123",
  "⠍": "134",
  "⠝": "1345",
  "⠕": "135",
  "⠏": "1234",
  "⠟": "12345",
  "⠗": "1235",
  "⠎": "234",
  "⠞": "2345",
  "⠥": "136",
  "⠧": "1236",
  "⠺": "2456",
  "⠭": "1346",
  "⠽": "13456",
  "⠵": "1356"
};

function inverse(obj) {
  var retobj = {};
  for (var key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

const n2b = inverse(b2n);
const b2l = inverse(l2b);

function newLetter() {
  const a = "abcdefghijklmnopqrstuvwxyz";
  target.innerText = a[Math.floor(Math.random() * a.length)];
  console.log(target.innerText);
  close();
}

newl.addEventListener("click", () => {
  newLetter();
});

for (let i = 0; i < b.length; i++) {
  b[i].addEventListener("click", () => {
    b[i].classList.toggle("dot");
  });
  b[i].braille = i + 1;
}

v.addEventListener("click", () => {
  let code = "";
  for (const i of b) {
    if (i.classList[1] === "dot") {
      code += i.braille.toString();
      // console.log(i.braille);
    }
  }
  console.log("->", code, n2b[code], b2l[n2b[code]]);
  if (b2l[n2b[code]]) {
    if (b2l[n2b[code]].toLowerCase() === target.innerText) {
      console.log("Yesss");
      updateScore(1);
      openYes();
      // document.querySelector(".r").innerText = "Yess";
      return;
    }
  }

  console.log("Nuuu");
  openNo();
  // document.querySelector(".r").innerText =
  //   "Non ! La réponse est" + String(l2b[target.innerText.toUpperCase()]);
});

newLetter();

function updateScore(nb) {
  if (nb) {
    score += nb;
  }
  console.log("BOOM LE SCORE LAAAAAAAA", score);

  document.querySelector(".score").innerText = score;
  document.querySelector(".scoreno").innerText = score;
  document.querySelector(".scoreui").innerText = score;
}

document.querySelector(".anew").addEventListener("click", () => {
  newLetter();
  close();
});

updateScore();
console.log(12);

retry.addEventListener("click", () => {
  updateScore(-1);
  close();
});

reveal.addEventListener("click", () => {
  updateScore(-3);
  close();
  document.querySelector(".answer").innerText =
    l2b[target.innerText.toUpperCase()];
  openAnswer();
});

/**
 * TRANSLATE (index.html)
 */
// let trans = document.querySelector("#translate");

// trans.addEventListener("input", () => {
//   console.log(trans);
//   for (let letter of trans.value) {
//     if (b2n.keys().includes(letter)) {
//       console.log("B !!!");
//     }
//   }
// });

async function ah() {
  // 20 - 350
  const response = await fetch("https://api.quotable.io/random?maxLength=20");
  const ahh = await response.json();
  console.log(ahh.content);
}

ah();
