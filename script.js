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

/**
 * TRANSLATE (index.html)
 */
const trans = document.querySelector("#translate");

const alphabet = /[A-z]/;
const braille = /[\u2801-\u2880]/;

trans.addEventListener("input", (e) => {
  let translation = "";
  const val = document.querySelector("#translate").value;

  if (val.match(alphabet) != null && val.match(braille) != null) {
    console.log("bordel");
    return;
  }

  if (val.match(alphabet) != null) {
    console.log("lettre");
    for (const letter of val) {
      if (letter === " ") {
        translation += " ";
      } else {
        console.log(l2b[letter.toUpperCase()], letter);
        translation += l2b[letter.toUpperCase()];
      }
    }
    document.querySelector("#translated").innerText = translation;
  }
  if (val.match(braille) != null) {
    console.log("braille");

    for (const letter of val) {
      console.log(b2l[letter]);
      translation += b2l[letter];
    }
  }
});
