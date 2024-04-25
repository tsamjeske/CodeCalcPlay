// Fügt einen Wert in das Ergebnisfeld hinzu
function appendToResult(value) {
    document.getElementById("result").value += value;
}
// Löscht alles aus dem Ergebnisfeld
function clearResult() {
    document.getElementById("result").value = "";
}
// Eingabe wird ausgerechnet
function calculateResult() {
    var result = document.getElementById("result").value;
    try {
        var finalResult = eval(result);
        document.getElementById("result").value = finalResult;
    } catch (error) {
        alert("Ungültiger Ausdruck!");
    }
}