//spawns hero
import { barrier, collider, hero, enemy } from '../engine'
import BindHeroMovement from '../../input/eventlisteners/hero'

export default function (callback) {

    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('forward-view')

    const enemyElement = document.createElement('div')
    enemyElement.classList.add('enemy')

    const wallElementOne = document.createElement('div')
    wallElementOne.classList.add('wall')


    document.body.appendChild(enemyElement)
    document.body.appendChild(heroElement)
    document.body.appendChild(wallElementOne)

    const heroObject = new hero(heroElement)
    const enemyObject = new enemy(enemyElement)
    const wallObjectOne = new collider(wallElementOne)

    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height))
    enemyObject.setPositionPX(window.innerWidth/2 - (enemyElement.getBoundingClientRect().width /2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 600 )
    wallObjectOne.setPositionPX(window.innerWidth/2 - (enemyElement.getBoundingClientRect().width /2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 300 )



    const enemyAttack = setInterval(() => {
        enemyObject.attack()
    }, 2000)




    callback(
        new BindHeroMovement(heroObject)
    )
}