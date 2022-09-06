import render from './render'
const heroA = () => {

    const hero = document.querySelector('#hero')
    let posX = 0
    let posY = 0

    window.onkeydown = (e) => {
        if (e.keyCode == 37) {
            // влево
            render(posX, posY)
            posX = posX - 5
            hero.style.left = posX + 'px'
        } else if (e.keyCode == 38) {
            // вверх
            render(posX, posY)
            posY = posY - 5
            hero.style.top = posY + 'px'
        } else if (e.keyCode == 39) {
            // вправо
            render(posX, posY)
            posX = posX + 5
            hero.style.left = posX + 'px'
        } else if (e.keyCode == 40) {
            // вниз
            render(posX, posY)
            posY = posY + 5
            hero.style.top = posY + 'px'
        }
    }
}

export default heroA