import render from './render'
const heroA = () => {

    const hero = document.querySelector('#hero')
    let posX = 0
    let posY = 0

    window.onkeydown = (e) => {
        if (e.keyCode == 37) {
            // влево
                posX = posX - 5
            hero.style.left = posX + 'px'
            if (posX <= 0) {
                hero.style.left = 0 + 'px'
                posX = 0
            }
            render()
        } else if (e.keyCode == 38) {
            // вверх
                posY = posY - 5
            hero.style.top = posY + 'px'
            if (posY <= 0) {
                hero.style.top = 0 + 'px'
                posY = 0
            }
            render()
        } else if (e.keyCode == 39) {
            // вправо
                posX = posX + 5
            hero.style.left = posX + 'px'
            if (posX >= 700) {
                hero.style.left = 700 + 'px'
                posX = 700
            }
            render()
        } else if (e.keyCode == 40) {
            // вниз
                posY = posY + 5
            hero.style.top = posY + 'px'
            if (posY >= 700) {
                hero.style.top = 700 + 'px'
                posY = 700
            }
            render()
        }
    }

    

}

export default heroA