//spawns hero
import { barrier, collider, hero, enemy, teleporter} from '../engine'
import BindHeroMovement from '../../input/eventlisteners/hero'

export default function () {

    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')

    const enemyElement = document.createElement('div')
    enemyElement.classList.add('enemy')

    const enemyElement2 = document.createElement('div')
    enemyElement2.classList.add('enemy')

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

    const teleporterWall = document.createElement('div')
    teleporterWall.classList.add('teleporter')
    teleporterWall.setAttribute('style',`
    width: ${window.innerWidth}px;
    top: 0px;
    height: 30px;
    position: absolute;
    `)

    const rock1 = document.createElement('div')
    rock1.classList.add('rock1')
    rock1.classList.add('rock')
    rock1.setAttribute('style', `
    right: ${window.innerWidth / 3}px;
    top: ${window.innerHeight / 3}px;
    `)

    const rock2 = document.createElement('div')
    rock2.classList.add('rock1')
    rock2.classList.add('rock')
    rock2.setAttribute('style', `
    right: ${window.innerWidth / 1.5}px;
    top: ${window.innerHeight / 1.5}px;
    `)

    const rock3 = document.createElement('div')
    rock3.classList.add('rock2')
    rock3.classList.add('rock')
    rock3.setAttribute('style', `
    right: ${window.innerWidth / 3}px;
    top: ${window.innerHeight / 1.5}px;
    `)

    const spriteList = [rock1, rock2, rock3,teleporterWall, enemyElement, enemyElement2, heroElement, wallElementOne, wallElementTwo, wallElementThree]
    spriteList.forEach(item => document.body.appendChild(item))


    const heroObject = new hero(heroElement)
    const enemyObject = new enemy(enemyElement)
    const enemyObject2 = new enemy(enemyElement2)
    new collider(wallElementOne)
    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(rock1)
    new collider(rock2)
    new collider(rock3)
    new teleporter(teleporterWall)
    new BindHeroMovement(heroObject)

    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height) - 100)
    enemyObject.setPositionPX(window.innerWidth/2 - (enemyElement.getBoundingClientRect().width /2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 400 )
    enemyObject2.setPositionPX(window.innerWidth- 200 - (enemyElement.getBoundingClientRect().width /2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 600 )


    
}