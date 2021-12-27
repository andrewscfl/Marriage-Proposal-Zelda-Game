//spawns hero
import { boss ,barrier, collider, hero, enemy, teleporter, dialog } from '../engine'
import BindHeroMovement from '../../input/eventlisteners/hero'

let screenToPaint = 1
const gameSizeX = document.querySelector('.game').offsetWidth
const gameSizeY = 991

const paintScreen1 = () => {
    document.querySelector('.audio').setAttribute('src','./assets/main.mp3')
    document.querySelector('.audio').play()

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
    width: ${gameSizeX}px;
    bottom: 0px;
    height: 30px;
    `);

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('wall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY}px;
    left: 0;
    top: 0;
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('wall')
    wallElementThree.setAttribute('style', `
    width: 30px;
    right: 0;
    top: 0;
    height: ${gameSizeY}px
    `)

    const teleporterElem = document.createElement('div')
    teleporterElem.classList.add('teleporter')
    teleporterElem.setAttribute('style', `
    width: ${gameSizeX / 3 + 20}px;
    right: ${gameSizeX / 3}px;
    height: 30px;
    top: 0;
    position: absolute;
    `)

    const wallElementPartial1 = document.createElement('div')
    wallElementPartial1.classList.add('grasswall')
    wallElementPartial1.setAttribute('style', `
    width: ${gameSizeX / 3}px;
    right: 0px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/rocks.png);
    `)

    const wallElementPartial2 = document.createElement('div')
    wallElementPartial2.classList.add('grasswall')
    wallElementPartial2.setAttribute('style', `
    width: ${gameSizeX / 3}px;
    left: 0px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/rocks.png);
    `)

    const rock1 = document.createElement('div')
    rock1.classList.add('rock1')
    rock1.classList.add('rock')
    rock1.setAttribute('style', `
    right: ${gameSizeX / 3}px;
    top: ${gameSizeY / 3}px;
    `)

    const rock2 = document.createElement('div')
    rock2.classList.add('rock1')
    rock2.classList.add('rock')
    rock2.setAttribute('style', `
    right: ${gameSizeX / 1.5}px;
    top: ${gameSizeY / 1.5}px;
    `)

    const rock3 = document.createElement('div')
    rock3.classList.add('rock2')
    rock3.classList.add('rock')
    rock3.setAttribute('style', `
    right: ${gameSizeX / 3}px;
    top: ${gameSizeY / 1.5}px;
    `)

    const spriteList = [heroElement, rock1, rock2, rock3, teleporterElem, enemyElement, enemyElement2, wallElementOne, wallElementTwo, wallElementThree, wallElementPartial1, wallElementPartial2]
    spriteList.forEach(item => document.querySelector('.objects').appendChild(item))


    const heroObject = new hero(heroElement)
    const enemyObject = new enemy(enemyElement)
    const enemyObject2 = new enemy(enemyElement2)
    new collider(wallElementOne)
    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(wallElementPartial1)
    new collider(wallElementPartial2)
    new collider(rock1)
    new collider(rock2)
    new collider(rock3)
    new teleporter(teleporterElem, 2)
    new BindHeroMovement(heroObject)

    heroObject.setPositionPX(gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2), gameSizeY - (heroElement.getBoundingClientRect().height) - 100)
    enemyObject.setPositionPX(gameSizeX / 2 - (enemyElement.getBoundingClientRect().width / 2), gameSizeY - (enemyElement.getBoundingClientRect().height) - 400)
    enemyObject2.setPositionPX(gameSizeX - 200 - (enemyElement.getBoundingClientRect().width / 2), gameSizeY - (enemyElement.getBoundingClientRect().height) - 600)
}

const paintScreen2 = () => {
    

    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')
    document.querySelector('.objects').appendChild(heroElement)

    const teleporterBackElem = document.createElement('div')
    teleporterBackElem.classList.add('teleporter')
    teleporterBackElem.setAttribute('style', `
    width: ${gameSizeX / 3 + 20}px;
    right: ${gameSizeX / 3}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    `)

    const wallElementPartial1 = document.createElement('div')
    wallElementPartial1.classList.add('grasswall')
    wallElementPartial1.setAttribute('style', `
    width: ${gameSizeX / 3}px;
    right: 0;
    height: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial2 = document.createElement('div')
    wallElementPartial2.classList.add('grasswall')
    wallElementPartial2.setAttribute('style', `
    width: ${gameSizeX / 3}px;
    left: 0;
    height: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial3 = document.createElement('div')
    wallElementPartial3.classList.add('grasswall')
    wallElementPartial3.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    top: 0;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial4 = document.createElement('div')
    wallElementPartial4.classList.add('grasswall')
    wallElementPartial4.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const teleporterElem = document.createElement('div')
    teleporterElem.classList.add('teleporter')
    teleporterElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    position: absolute;
    `)



    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('grasswall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY}px;
    right: 0;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('grasswall')
    wallElementThree.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const enemyElement = document.createElement('div')
    enemyElement.classList.add('enemy')

    const enemyElement2 = document.createElement('div')
    enemyElement2.classList.add('enemy')

   

    const spriteList = [heroElement, enemyElement, enemyElement2, teleporterBackElem, wallElementTwo, wallElementThree, wallElementPartial1, wallElementPartial2, wallElementPartial3, wallElementPartial4, teleporterElem]
    spriteList.forEach(item => document.querySelector('.objects').appendChild(item))

    const heroObject = new hero(heroElement)

    const enemyObject = new enemy(enemyElement)
    const enemyObject2 = new enemy(enemyElement2)

    new teleporter(teleporterBackElem, 1)

    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(wallElementPartial1)
    new collider(wallElementPartial2)
    new collider(wallElementPartial3)
    new collider(wallElementPartial4)
    new teleporter(teleporterElem, 3)
    

    heroObject.setPositionPX(gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2), gameSizeY - (heroElement.getBoundingClientRect().height) - 100)
    enemyObject.setPositionPX(gameSizeX / 2 - (enemyElement.getBoundingClientRect().width / 2), gameSizeY - (enemyElement.getBoundingClientRect().height) - 400)
    enemyObject2.setPositionPX(gameSizeX - 200 - (enemyElement.getBoundingClientRect().width / 2), gameSizeY - (enemyElement.getBoundingClientRect().height) - 600)

    new BindHeroMovement(heroObject)

}

const paintScreen3 = () => {
 


    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')
    document.querySelector('.objects').appendChild(heroElement)


    const enemyElement = document.createElement('div')
    enemyElement.classList.add('levi')
    enemyElement.setAttribute('style', `
    top: ${gameSizeY / 2 - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2)}px;
    `)
    document.querySelector('.objects').appendChild(enemyElement)

    const teleporterBackElem = document.createElement('div')
    teleporterBackElem.classList.add('teleporter')
    teleporterBackElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    right: 0;
    position: absolute;
    `)

    const wallElementPartial1 = document.createElement('div')
    wallElementPartial1.classList.add('grasswall')
    wallElementPartial1.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    top: 0;
    width: 30px;
    right: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial2 = document.createElement('div')
    wallElementPartial2.classList.add('grasswall')
    wallElementPartial2.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    bottom: 0;
    width: 30px;
    right: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial3 = document.createElement('div')
    wallElementPartial3.classList.add('grasswall')
    wallElementPartial3.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    top: 0;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial4 = document.createElement('div')
    wallElementPartial4.classList.add('grasswall')
    wallElementPartial4.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const teleporterElem = document.createElement('div')
    teleporterElem.classList.add('teleporter')
    teleporterElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    position: absolute;
    `)

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('grasswall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY / 3}px;
    left: 0;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('grasswall')
    wallElementThree.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementFour = document.createElement('div')
    wallElementFour.classList.add('grasswall')
    wallElementFour.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const spriteList = [heroElement, teleporterBackElem, wallElementTwo, wallElementThree, wallElementFour, wallElementPartial1, wallElementPartial2, wallElementPartial3, wallElementPartial4, teleporterElem]
    spriteList.forEach(item => document.querySelector('.objects').appendChild(item))

    const heroObject = new hero(heroElement)
    const enemyObject = new boss(enemyElement)
    new teleporter(teleporterBackElem, 2)
    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(wallElementPartial1)
    new collider(wallElementPartial2)
    new collider(wallElementPartial3)
    new collider(wallElementPartial4)
    new collider(wallElementFour)
    new teleporter(teleporterElem, 4)
 
    heroObject.setPositionPX(gameSizeX / 4 - (heroElement.getBoundingClientRect().width / 2), gameSizeY / 2 - (heroElement.getBoundingClientRect().height))
    enemyObject.setPositionPX(gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2),gameSizeY / 2 - (heroElement.getBoundingClientRect().height))

    new BindHeroMovement(heroObject)


    setTimeout(() => {
        collider.pauseGame = true
        new dialog("MOM YOU DIDN'T TAKE ME OUT WHEN I RANG THE BELLS, I WILL SHIT NOW",'LEVI')
        
    },1000)
}

const paintScreen4 = () => {
    
    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')
    document.querySelector('.objects').appendChild(heroElement)

    const teleporterBackElem = document.createElement('div')
    teleporterBackElem.classList.add('teleporter')
    teleporterBackElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    right: 0;
    position: absolute;
    `)

    const wallElementPartial1 = document.createElement('div')
    wallElementPartial1.classList.add('grasswall')
    wallElementPartial1.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    top: 0;
    width: 30px;
    right: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial2 = document.createElement('div')
    wallElementPartial2.classList.add('grasswall')
    wallElementPartial2.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    bottom: 0;
    width: 30px;
    right: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial3 = document.createElement('div')
    wallElementPartial3.classList.add('grasswall')
    wallElementPartial3.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    top: 0;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial4 = document.createElement('div')
    wallElementPartial4.classList.add('grasswall')
    wallElementPartial4.setAttribute('style', `
    height: ${gameSizeY / 3}px;
    left: 0;
    width: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const teleporterElem = document.createElement('div')
    teleporterElem.classList.add('teleporter')
    teleporterElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    position: absolute;
    `)

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('grasswall')
    wallElementTwo.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY / 3}px;
    left: 0;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('grasswall')
    wallElementThree.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementFour = document.createElement('div')
    wallElementFour.classList.add('grasswall')
    wallElementFour.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const spriteList = [heroElement, teleporterBackElem, wallElementTwo, wallElementThree, wallElementFour, wallElementPartial1, wallElementPartial2, wallElementPartial3, wallElementPartial4, teleporterElem]
    spriteList.forEach(item => document.querySelector('.objects').appendChild(item))

    const heroObject = new hero(heroElement)
    
    new teleporter(teleporterBackElem, 3)
    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(wallElementPartial1)
    new collider(wallElementPartial2)
    new collider(wallElementPartial3)
    new collider(wallElementPartial4)
    new collider(wallElementFour)
    new teleporter(teleporterElem, 5)
 
    heroObject.setPositionPX(gameSizeX / 4 - (heroElement.getBoundingClientRect().width / 2), gameSizeY / 2 - (heroElement.getBoundingClientRect().height))

    new BindHeroMovement(heroObject)
    
}





export default function () {

    paintScreen1()

    document.addEventListener('change-screen', (event) => {
        collider.intervalList.forEach(item => clearInterval(item))
        const colliderList = event.detail.cl
        
        const screenToPaint = event.detail.screen
        console.log('running change screen' + screenToPaint)

        switch (screenToPaint) {
            case 1:
                colliderList.forEach(item => {
                    item.element.remove()
                })
                collider.colliderList = []
                document.querySelector('.objects').innerHTML = ''
                paintScreen1()
                break
            case 2:
                console.log('ran this block')
                
                colliderList.forEach(item => {
                    item.element.remove()
                })
                collider.colliderList = []
                document.querySelector('.objects').innerHTML = ''
                paintScreen2()
                break
            case 3:
                console.log('teleport to screen 3')
                colliderList.forEach(item => {
                    item.element.remove()
                })
                collider.colliderList = []
                document.querySelector('.objects').innerHTML = ''
                paintScreen3()
                break
            case 4:
                console.log('teleport to screen 4')
                colliderList.forEach(item => {
                    item.element.remove()
                })
                collider.colliderList = []
                document.querySelector('.objects').innerHTML = ''
                paintScreen4()
                break
            
                

        }
    })



}