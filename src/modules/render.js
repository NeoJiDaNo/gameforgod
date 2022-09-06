// import heroA from './heroAbilities'
const render = (posX, posY) => {

const hero = document.querySelector('#hero')

    if (posX < 0) {
        hero.style.left = 700 + 'px'
        posX = 700
    } else if (posX > 700) {
        hero.style.left = 0 + 'px'
        posX = 0
    } else if (posY < 0) {
        hero.style.top = 700 + 'px'
        posY = 700
    } else if (posY > 700) {
        hero.style.top = 0 + 'px'
        posY = 0
    }

    // heroA(posX, posY)
}

export default render