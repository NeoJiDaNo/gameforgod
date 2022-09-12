const createRune = () => {
    let rune = document.createElement('img')
    rune.src = 'img/rune.webp'
    rune.classList.add('rune')
    
    const spawnZone = document.querySelector('#spawnZone')

    let posX = Math.floor(Math.random() * (600 - 100)) + 100
    let posY = Math.floor(Math.random() * (600 - 100)) + 100
    
    rune.style.left = posX + 'px'
    rune.style.top = posY + 'px'


    spawnZone.appendChild(rune)
}
export default createRune