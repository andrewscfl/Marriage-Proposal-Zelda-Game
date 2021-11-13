//spawns hero
import { collider, hero } from '../engine'

export default function (callback) {
    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('forward-view')
    const heroObject = new hero(heroElement)
    document.body.appendChild(heroElement)
    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height))
    setInterval(()=>{
        heroObject.moveUp()
        heroObject.moveRight()
    },50)
    callback()
}