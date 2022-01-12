

function getNum(num) {
    let result = document.getElementById("result")
    result.value += num;
};

function clearfun() {
    let result = document.getElementById("result");
    result.value = "";
};
function getResult() {
    let result = document.getElementById("result");
    result.value = eval(result.value);
};
function cut() {
    if (result.value) {
      result.value = result.value.slice(0, -1);
    }
}

function color() {
  let x = document.getElementById("main");
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "black";
    x.style.borderColor = "black";
    
  } else {
    x.style.backgroundColor = "white";
    x.style.borderColor = "white";
    
  }
}