// Eingegebene Daten aus dem Login Container werden aus dem Formular geholt
const form = document.getElementById("form")
const passwordInput = document.getElementById("password_input")
const messageContainer = document.getElementById("message-container")
// Formular mit eingegebenen Daten wird abgeschickt 
form.addEventListener("submit", (e) =>{

    let password = passwordInput.value
    let errors = findErrors(password)
// Sollte das Passwort zu kurz sein erscheint eine rote schrift und abschicken wird verhindert
    if(errors.length > 0){
        e.preventDefault()
        messageContainer.innerText = errors.join('. ')
        messageContainer.classList.add("red-message")
        passwordInput.classList.add("red-input")
    }
// Sollte Passwort lang genug sein wird die rote schrift enfernt und kann abgeschickt werden 
    passwordInput.addEventListener("input", () =>{
        passwordInput.classList.remove("red-input")
        messageContainer.innerText = ''
    })
})
// Sollte das Passwort zu kurz sein wird diese Meldung angezeigt
function findErrors(password){
    let errorMessages = []

    if(password === '' || password == null){
        errorMessages.push("Kein Passwort eingegeben")
    }
    if(password.length < 8){
        errorMessages.push("Das Passwort ist zu kurz")
    }

    return errorMessages
}