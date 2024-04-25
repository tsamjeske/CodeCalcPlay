// Aus der Liste werden sich die eingetragenen Informationen geholt
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]
// Wird der Knopf benutzt werden die Informationen abgeschickt 
toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
})