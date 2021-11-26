//spawns hero
import { barrier, collider, hero } from '../engine'

export default function (callback) {
    
    const wallElement = document.createElement('div')
    wallElement.classList.add('collider')
    wallElement.classList.add('wall')

    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('forward-view')

    const heroObject = new hero(heroElement)
    const wallObject = new barrier(wallElement)

    document.body.appendChild(wallElement)
    document.body.appendChild(heroElement)


    wallObject.setPositionPX(
        window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2),
        window.innerHeight - (heroElement.getBoundingClientRect().height) - 200
        )
    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height))
    const intervalTest = setInterval(() => {
        heroObject.moveUp()
    }, 50)
    setTimeout(() => {
        clearInterval(intervalTest)
        heroObject.moveDown()
        setInterval(() => {heroObject.moveDown(); heroObject.moveRight()}, 50)
        
    },6000)
    collider.watchCollision()
    callback()
}