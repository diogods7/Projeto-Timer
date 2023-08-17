const body = document.querySelector("body")
const btnTheme = document.querySelector("#mode-theme")
const iconDark = document.querySelector("#dark")
const iconLight = document.querySelector("#light")


function handleTheme() {
    body.classList.toggle("light-mode")
    body.classList.toggle("dark-mode")
    iconDark.classList.toggle("hiden")
    iconLight.classList.toggle("hiden")
    }

btnTheme.addEventListener('click', handleTheme)
