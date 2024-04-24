function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    var result = document.getElementById("result").value;
    try {
        var finalResult = eval(result);
        document.getElementById("result").value = finalResult;
    } catch (error) {
        alert("Ung체ltiger Ausdruck!");
    }
}