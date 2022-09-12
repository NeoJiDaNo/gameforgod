
const render = () => {

const hero = document.querySelector('#hero')
const rune = document.querySelector('.rune')

function getCoords(elem) { // Функция получения координат нужного нам элемента (верх, право и лево)
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        right: box.right + pageXOffset,
        bottom: box.bottom + pageYOffset
    };
}

let rr = getCoords(rune).right
let rl = getCoords(rune).left
let rt = getCoords(rune).top
let rb = getCoords(rune).bottom

let hr = getCoords(hero).right
let hl = getCoords(hero).left
let ht = getCoords(hero).top
let hb = getCoords(hero).bottom

if (hr > rl && hr < rr) {
    console.log('kk');
} else if (hl < rl && hl > rr) {
    console.log('kk');
}

}

export default render