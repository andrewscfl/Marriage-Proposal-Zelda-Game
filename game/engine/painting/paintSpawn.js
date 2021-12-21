//spawns hero
import { barrier, collider, hero, enemy, teleporter, teleporterBack } from '../engine'
import BindHeroMovement from '../../input/eventlisteners/hero'

let screenToPaint = 1

const paintScreen1 = () => {
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
    teleporterWall.setAttribute('style', `
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

    const spriteList = [heroElement, rock1, rock2, rock3, teleporterWall, enemyElement, enemyElement2, wallElementOne, wallElementTwo, wallElementThree]
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
    enemyObject.setPositionPX(window.innerWidth / 2 - (enemyElement.getBoundingClientRect().width / 2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 400)
    enemyObject2.setPositionPX(window.innerWidth - 200 - (enemyElement.getBoundingClientRect().width / 2), window.innerHeight - (enemyElement.getBoundingClientRect().height) - 600)
}

const paintScreen2 = () => {
    collider.intervalList.forEach(item => clearInterval(item))
    collider.colliderList = []

    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')
    document.body.appendChild(heroElement)

    const teleporterBackElem = document.createElement('div')
    teleporterBackElem.classList.add('teleporter')
    teleporterBackElem.setAttribute('style', `
    width: ${window.innerWidth}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    `)

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('grasswall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${window.innerHeight}px;
    right: 0;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('grasswall')
    wallElementThree.setAttribute('style', `
    width: ${window.innerWidth}px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const spriteList = [ heroElement, teleporterBackElem, wallElementTwo, wallElementThree ]
    spriteList.forEach(item => document.body.appendChild(item))
    new teleporterBack(teleporterBackElem)
    new collider(wallElementTwo)
    new collider(wallElementTwo)
    const heroObject = new hero(heroElement)
    new BindHeroMovement(heroObject)
    heroObject.setPositionPX(window.innerWidth / 2 - (heroElement.getBoundingClientRect().width / 2), window.innerHeight - (heroElement.getBoundingClientRect().height) - 100)

}



export default function () {
    paintScreen1()

    document.addEventListener('change-screen', (event) => {
        const colliderList = event.detail.cl
        screenToPaint++
        
        switch (screenToPaint) {
            case 1:
                colliderList.forEach(item => {
                    item.element.remove()
                })
                paintScreen1()
                
                break
            case 2:
                console.log('ran this block')
                colliderList.forEach(item => {
                    item.element.remove()
                })
                paintScreen2()
                break
            
        }
    })

    document.addEventListener('change-screen-back', (event) => {
        const colliderList = event.detail.cl
        screenToPaint--
        
        switch (screenToPaint) {
            case 1:
                colliderList.forEach(item => {
                    item.element.remove()
                })
                paintScreen1()
                break
            case 2:
                console.log('ran this block')
                colliderList.forEach(item => {
                    item.element.remove()
                })
                paintScreen2()
                break
            
    }
})


}