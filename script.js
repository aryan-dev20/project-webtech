let toggle = document.getElementById("checkbox")
let body = document.getElementById("darkmode")
let text = document.getElementById("toggle-text")

toggle.addEventListener("change", () => {

    if (toggle.checked) {
        body.classList.add("dark")
        body.classList.remove("white")
        body.style.transition = "all 0.4s ease-in-out "
        text.textContent = "White Mode"

    } else {
        body.classList.add("white")
        body.classList.remove("dark")
        text.textContent = "Dark Mode";

    }

})

function show(divid) {

    document.getElementById("div-1").style.display = "none"
    document.getElementById("div-2").style.display = "none"

    document.getElementById(divid).style.display = "block"
}