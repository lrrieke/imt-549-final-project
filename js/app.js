var monumentButton = document.getElementById("monument");

var monumentInput = document.getElementById("monument-select");

var monumentOutput = document.querySelector(".monument-selected");

monumentButton.addEventListener("click", function() {
    monumentOutput.classList.add(monumentInput.value);

monumentOutput.addEventListener("selectionend", function () {
    monumentOutput.classList.remove(monumentInput.value)
}); 

}); 