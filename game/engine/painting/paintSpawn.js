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
    wallElementOne.setAttribute('style', `
    width: ${window.innerWidth}px;
    bottom: 0px;
    height: 30px;
    `);

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('wall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${window.innerHeight}px;
    left: 0;
    top: 0;
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('wall')
    wallElementThree.setAttribute('style', `
    width: 30px;
    right: 0;
    top: 0;
    height: ${window.innerHeight}px
    `)


    document.body.appendChild(enemyElement)
    document.body.appendChild(heroElement)
    document.body.appendChild(wallElementOne)
    document.body.appendChild(wallElementTwo)
    document.body.appendChild(wallElementThree)



    const heroObject = new hero(heroElement)
    const enemyObject = new enemy(enemyElement)
    new collider(wallElementOne)
    new collider(wallElementTwo)
    new collider(wallElementThree)

    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height) - 100)
    enemyObject.setPositionPX(window.innerWidth/2 - (enemyElement.getBoundingClientRect().width /2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 400 )


    const enemyAttack = setInterval(() => {
        enemyObject.attack()
    }, 2000)




    callback(
        new BindHeroMovement(heroObject)
    )
}