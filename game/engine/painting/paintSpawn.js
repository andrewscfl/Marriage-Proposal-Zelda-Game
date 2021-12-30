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
    
    const bush1 = document.createElement('div')
    bush1.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 2}px;
    right: ${gameSizeX / 4}px;
    `)

    const bush2 = document.createElement('div')
    bush2.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 2 - 200}px;
    right: ${gameSizeX / 4 + 200}px;
    `)

    const bush3 = document.createElement('div')
    bush3.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 1.2 - 200}px;
    right: ${gameSizeX - 400}px;
    `)

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

   

    const spriteList = [bush1, bush2, bush3, heroElement, enemyElement, enemyElement2, teleporterBackElem, wallElementTwo, wallElementThree, wallElementPartial1, wallElementPartial2, wallElementPartial3, wallElementPartial4, teleporterElem]
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
    new collider(bush1)
    new collider(bush2)
    new collider(bush3)
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
        const dogDialog = new dialog("YOULL NEVER GET THE SKELETON KEY OUT OF MY MOUTH. I WILL FLING MY POO AT YOU",'LEVI')
        dogDialog.queueMessage()
        
    },1000)
}

const paintScreen4 = () => {

    const bush1 = document.createElement('div')
    bush1.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 1.5}px;
    right: ${gameSizeX / 3}px;
    `)

    const bush2 = document.createElement('div')
    bush2.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 1.5}px;
    right: ${gameSizeX / 4 + 400}px;
    `)

    const bush3 = document.createElement('div')
    bush3.setAttribute('style', `
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./assets/bush.png);
    top: ${gameSizeY / 2.5}px;
    right: ${gameSizeX - 400}px;
    `)
    
    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('front1')
    document.querySelector('.objects').appendChild(heroElement)

    const teleporterBackElem = document.createElement('div')
    teleporterBackElem.classList.add('teleporter')
    teleporterBackElem.classList.add('teleporter1')
    teleporterBackElem.setAttribute('style', `
    height: ${gameSizeY / 3 + 20}px;
    top: ${gameSizeY / 3}px;
    width: 30px;
    right: 0;
    position: absolute;
    `)

    const wallElementPartial1 = document.createElement('div')
    wallElementPartial1.classList.add('grasswall')
    wallElementPartial1.classList.add('grasswall1')
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
    wallElementPartial2.classList.add('grasswall2')
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
    wallElementPartial3.classList.add('grasswall3')
    wallElementPartial3.setAttribute('style', `
    height: 30px;
    top: 0;
    right: 0;
    width: ${gameSizeX / 3}px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementPartial4 = document.createElement('div')
    wallElementPartial4.classList.add('grasswall')
    wallElementPartial4.classList.add('grasswall4')
    wallElementPartial4.setAttribute('style', `
    top: 0;
    width: ${gameSizeX / 3 + 20}px;
    left: 0;
    height: 30px;
    position: absolute;
    `)

    const teleporterElem = document.createElement('div')
    teleporterElem.classList.add('teleporter')
    teleporterElem.classList.add('teleporter2')
    teleporterElem.setAttribute('style', `
    top: 0;
    width: ${gameSizeX / 3 + 20}px;
    right: ${gameSizeX / 3}px;
    height: 30px;
    position: absolute;
    `)

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('grasswall')
    wallElementTwo.classList.add('grasswall5')
    wallElementTwo.setAttribute('style', `
    width: ${gameSizeX / 3}px;
    height: 30px;
    left: 0;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('grasswall')
    wallElementThree.classList.add('grasswall6')
    wallElementThree.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY}px;
    top: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const wallElementFour = document.createElement('div')
    wallElementFour.classList.add('grasswall')
    wallElementFour.classList.add('grasswall7')
    wallElementFour.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    background-image: url(./assets/grass.png);
    `)

    const spriteList = [bush1, bush2, bush3, heroElement, teleporterBackElem, wallElementTwo, wallElementThree, wallElementFour, wallElementPartial1, wallElementPartial2, wallElementPartial3, wallElementPartial4, teleporterElem]
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
    new collider(bush1)
    new collider(bush2)
    new collider(bush3)
    new teleporter(teleporterElem, 5)
 
    heroObject.setPositionPX(gameSizeX / 4 - (heroElement.getBoundingClientRect().width / 2), gameSizeY / 2 - (heroElement.getBoundingClientRect().height))

    new BindHeroMovement(heroObject)
    
}

const paintScreen5 = () => {
    
    document.querySelector('.spawn-screen').classList.add('final')


    const heroElement = document.createElement('div')
    heroElement.classList.add('hero')
    heroElement.classList.add('back1')
    document.querySelector('.objects').appendChild(heroElement)

    const wallElementOne = document.createElement('div')
    wallElementOne.classList.add('wall')
    wallElementOne.classList.add('grasswall5')
    wallElementOne.setAttribute('style', `
    height: ${gameSizeY}px;
    width: 30px;
    right: 0;
    top: 0;
    position: absolute;
    `)

    const wallElementTwo = document.createElement('div')
    wallElementTwo.classList.add('wall')
    wallElementTwo.classList.add('grasswall5')
    wallElementTwo.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    left: 0;
    top: 0;
    position: absolute;
    `)

    const wallElementThree = document.createElement('div')
    wallElementThree.classList.add('wall')
    wallElementThree.classList.add('grasswall6')
    wallElementThree.setAttribute('style', `
    width: 30px;
    height: ${gameSizeY}px;
    top: 0;
    position: absolute;
    `)

    const wallElementFour = document.createElement('div')
    wallElementFour.classList.add('wall')
    wallElementFour.classList.add('grasswall7')
    wallElementFour.setAttribute('style', `
    width: ${gameSizeX}px;
    height: 30px;
    bottom: 0;
    position: absolute;
    `)

    const natasha = document.createElement('div')
    natasha.classList.add('natasha')
    natasha.setAttribute('style', `
    position: absolute;
    top: ${gameSizeY / 2.7   - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2)}px;
    height: 100px;
    width: 80px;
    background-image: url(./assets/natasha.png);
    background-size: cover;
    `)
    const alejandro = document.createElement('div')
    alejandro.setAttribute('style', `
    position: absolute;
    top: ${gameSizeY / 2.7   - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 + 100 - (heroElement.getBoundingClientRect().width / 2)}px;
    height: 100px;
    width: 80px;
    background-image: url(./assets/alejandro.png);
    background-size: cover;
    `)

    const kristina = document.createElement('div')
    kristina.setAttribute('style', `
    position: absolute;
    top: ${gameSizeY / 2.7   - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 - 100 - (heroElement.getBoundingClientRect().width / 2)}px;
    height: 100px;
    width: 80px;
    background-image: url(./assets/kristina.png);
    background-size: cover;
    `)

    const lena = document.createElement('div')
    lena.setAttribute('style', `
    position: absolute;
    top: ${gameSizeY / 2.7   - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 + 200 - (heroElement.getBoundingClientRect().width / 2)}px;
    height: 100px;
    width: 80px;
    background-image: url(./assets/lena.png);
    background-size: cover;
    `)

    const andrew = document.createElement('div')
    andrew.classList.add('andrew')
    andrew.setAttribute('style', `
    position: absolute;
    top: ${gameSizeY / 1.7   - (heroElement.getBoundingClientRect().height)}px;
    right: ${gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2)}px;
    height: 100px;
    width: 80px;
    background-image: url(./assets/andrew.png);
    background-size: cover;
    `)

    const spriteList = [andrew, lena, kristina, alejandro, natasha, heroElement, wallElementTwo, wallElementThree, wallElementFour, wallElementOne]
    spriteList.forEach(item => document.querySelector('.objects').appendChild(item))

    const heroObject = new hero(heroElement)
    new collider(wallElementOne)
    new collider(wallElementTwo)
    new collider(wallElementThree)
    new collider(wallElementFour)
 
    heroObject.setPositionPX(gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2), gameSizeY / 1.2   - (heroElement.getBoundingClientRect().height))

    const quotes = [
        {
            name: 'KRISTINA',
            quote: "You've grown so much individually and as a couple, and I can't wait to see where this next stage leads you. I hope happiness always follows you two."
        },
        {
            name: 'LENA',
            quote: "Eleni! you deserve to always be happy with someone you love dearly and I think you found him. I'm excited to see what teh future holds for you two and wishing you both lots of love, happiness and good health together forever!"
        },
        {
            name: 'NATASHA',
            quote: 'I absolutely cannot wait to see you set out on your next adventure as this new chapter in your life begins, and it’s been my greatest privilege to be able to call you my best friend! <3'
        },
        {
            name: 'ALEJANDRO',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'TREVOR',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'ANDREW',
            quote: 'YOU HAVE BEEN MY BEST FRIEND FOR AS LONG AS I CAN REMEMBER. WE HAVE GONE ON SO MANY ADVENTURES'
        },
        {
            name: 'ANDREW',
            quote: 'FROM HIGHSCHOOL, THROUGH ALL OF COLLEGE, AND INTO OUR CAREERS YOU HAVE BEEN BY MY SIDE'
        },
        {
            name: 'ANDREW',
            quote: 'IM INCREDIBLY LUCKY THAT I GET TO HAVE SOMEONE LIKE YOU IN LIFE, AND I WOULD LOVE NOTHING MORE THAN TO SPEND THE REST OF IT WITH YOU'
        },
    ]

    function callQuotes(quoteNumber) {
        const myDialog =  new dialog(quotes[quoteNumber].quote, quotes[quoteNumber].name)
        myDialog.queueMessage().then(() => {
            if (quoteNumber + 1 === quotes.length) {
                document.querySelector('.andrew').setAttribute('style', `
                position: absolute;
                top: ${gameSizeY / 1.7   - (heroElement.getBoundingClientRect().height)}px;
                right: ${gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2)}px;
                height: 100px;
                width: 80px;
                background-image: url(./assets/andrewkneel1.png);
                background-size: cover;
                `)
                setTimeout(() => {
                    document.querySelector('.andrew').setAttribute('style', `
                    position: absolute;
                    top: ${gameSizeY / 1.7   - (heroElement.getBoundingClientRect().height)}px;
                    right: ${gameSizeX / 2 - (heroElement.getBoundingClientRect().width / 2)}px;
                    height: 100px;
                    width: 80px;
                    background-image: url(./assets/andrewkneel2.png);
                    background-size: cover;
                `)
                const finalDialog = new dialog('ITS DANGEROUS TO GO ALONE TAKE THIS','ANDREW')
                finalDialog.queueMessage()
                }, 1000)

                return 
            }
            return callQuotes(quoteNumber + 1)
        })
    }

    callQuotes(0)
       
    






    
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
            case 5:
                console.log('teleporting to screen 5')
                colliderList.forEach(item => {
                    item.element.remove()
                })
                collider.colliderList = []
                document.querySelector('.objects').innerHTML = ''
                paintScreen5()
                break
            
                

        }
    })



}