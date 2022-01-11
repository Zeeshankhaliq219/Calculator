

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
