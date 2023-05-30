function toggleMode () {
const html = document.documentElement
html.classList.toggle("luz")


const img = document.querySelector("#profile img")

if (html.classList.contains('luz')) {
    img.src = "./Imagens/avatarLUZ.jpg"
}
else img.src = "./Imagens/avatar.jpg"



}