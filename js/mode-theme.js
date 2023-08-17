const body = document.querySelector("body")
const btnTheme = document.querySelector("#mode-theme")


function handleTheme() {
    body.classList.toggle("light-mode")
    body.classList.toggle("dark-mode")
    }

btnTheme.addEventListener('click', handleTheme)
