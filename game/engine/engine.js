export class collider {
    static colliderList = []
    static intervalList = []
    constructor(DOMELEMENT) {

        this.element = DOMELEMENT
        this.type = ''
        this.momentumX = null
        this.momentumY = null
        this.collision = false
        this.isHero = false
        this.destroyed = false
        this.movementTicker = 1
        this.facingDirection = null
        this.currentScreen = 1
        this.instanceIndex = collider.colliderList.push({
            element: DOMELEMENT,
            instance: this,
        })
    }

    destroyInstance = () => {
        this.element.remove()
        this.destroyed = true
        collider.colliderList.splice(this.instanceIndex - 1, 1)
    }

    clearStage = () => {
        collider.intervalList.forEach(inter => clearInterval(inter))
        collider.colliderList.forEach((item,index) => {
            collider.colliderList.splice(index, 1)
        })
    }



    getFacingDirection = () => this.facingDirection
    getHeroStatus = () => this.isHero

    // check if impact on any and all elements
    static detectImpact = () => {
        let impacted = false
        for (let i = 0; i < collider.colliderList.length; i++) {
            for (let x = (i + 1); x < collider.colliderList.length; x++) {
                if (collider.colliderList[i].element !== undefined && collider.colliderList[x].element !== undefined) {
                // compare if collision here
                let rect1 = collider.colliderList[i].element.getBoundingClientRect()
                let rect2 = collider.colliderList[x].element.getBoundingClientRect()

                let overlap = !(
                    rect1.top > rect2.bottom ||
                    rect1.right < rect2.left ||
                    rect1.bottom < rect2.top ||
                    rect1.left > rect2.right
                );


                //end collision compare
                collider.colliderList[i].instance.collision = overlap
                collider.colliderList[x].instance.collision = overlap

                }

            }
        }


    }

    //method prevents walk forward on collision
    static checkCollisions = () => {

        for (let i = 0; i < collider.colliderList.length; i++) {
            for (let x = (i + 1); x < collider.colliderList.length; x++) {
                if (collider.colliderList[i].element !== undefined && collider.colliderList[x].element !== undefined) {
                    // compare if collision here
                    let rect1 = collider.colliderList[i].element.getBoundingClientRect()
                    let rect2 = collider.colliderList[x].element.getBoundingClientRect()

                    let overlap = !(
                        rect1.top > rect2.bottom ||
                        rect1.right < rect2.left ||
                        rect1.bottom < rect2.top ||
                        rect1.left > rect2.right
                    );


                    //end collision compare
                    collider.colliderList[i].instance.collision = overlap
                    collider.colliderList[x].instance.collision = overlap

                   
                    

                    const inst1 = collider.colliderList[i].instance
                    const inst2 = collider.colliderList[x].instance
                    if ((inst1.collision && inst2.collision) && (inst1.type === 'hero' && inst2.type === 'teleport') || (inst1.type === 'teleport' && inst2.type === 'hero')) {
                        const teleporterScreenTarget = inst1.type === 'teleport' ? inst1.screen : inst2.screen
                        const event = new CustomEvent('change-screen', { "detail": { "cl": collider.colliderList, "screen" : teleporterScreenTarget } })
                        document.dispatchEvent(event)
                    }



                    if (overlap) {
                        return true
                    }
                }

            }
        }

        return false
    }



    setPositionPX = (x, y) => {
        this.element.style.right = `${x}px`
        this.element.style.top = `${y}px`
    }

    mapDirections = (direction, isPositive) => {
        let mappedDirection
        if (direction === 'right' && isPositive) mappedDirection = 'right'
        if (direction === 'right' && !isPositive) mappedDirection = 'left'
        if (direction === 'top' && isPositive) mappedDirection = 'down'
        if (direction === 'top' && !isPositive) mappedDirection = 'top'
        return mappedDirection
    }



    move = (direction, isPositive) => {
        this.movementTicker = this.movementTicker === 1 ? 2 : 1
        let current = parseInt(this.element.style[direction].replace('px', ''))
        let newVal = isPositive ? current += 8 : current -= 8
        let newValPx = newVal + 'px'
        this.element.style[direction] = newValPx
        collider.checkCollisions()
        
        if (this.collision) {
            
            let current = parseInt(this.element.style[direction].replace('px', ''))
            let newVal = isPositive ? current -= 8 : current += 8
            let newValPx = newVal + 'px'
            this.element.style[direction] = newValPx
        }
    }

    removeMovementClasses = (element) => {
        const classes = ['right', 'left', 'back', 'front', 'attacktop', 'attackbottom', 'attackright', 'attackleft', 'hero-attackX']
        classes.forEach(item => {
            element.classList.remove(item)
            element.classList.remove(item + '1')
            element.classList.remove(item + '2')
        })
    }

    checkTeleport = () => {
        collider.checkCollisions()
        const teleporterArr = collider.colliderList.filter(item => (item.instance !== undefined) ? item.instance.type === 'teleport' : false)
        if (teleporterArr.length !== 0) {
            const teleporter = teleporterArr[0]
            if (teleporter.collision) {
                alert('collision with teleporter')
            }
        }
    }


    moveLeft = () => {
        this.facingDirection = 'left'
        this.momentumX = 'right'
        this.move('right', true)
        if (this.isHero) {
            this.removeMovementClasses(this.element)
            this.element.classList.add('left' + this.movementTicker.toString())
            this.checkTeleport()
        }
    }
    moveRight = () => {
        this.facingDirection = 'right'
        this.momentumX = 'right'
        this.move('right', false)
        if (this.isHero) {
            this.removeMovementClasses(this.element)
            this.element.classList.add('right' + this.movementTicker.toString())
            this.checkTeleport()
        }
    }
    moveUp = () => {
        this.facingDirection = 'top'
        this.momentumY = 'top'
        this.move('top', false)
        if (this.isHero) {
            this.removeMovementClasses(this.element)
            this.element.classList.add('back' + this.movementTicker.toString())
            this.checkTeleport()
        }
    }
    moveDown = () => {
        this.facingDirection = 'bottom'
        this.momentumY = 'top'
        this.move('top', true)
        if (this.isHero) {
            this.removeMovementClasses(this.element)
            this.element.classList.add('front' + this.movementTicker.toString())
            this.checkTeleport()
        }
    }


}

export class attackWeapon extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.type = 'weapon'
    }
}

export class projectile extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.type = 'projectile'
    }
}



export class hero extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.hero = DOMELEMENT
        this.isHero = true
        this.type = 'hero'
        this.screen = 1
    }



    attack = () => {
        const direction = this.getFacingDirection()

        const { x, y } = this.hero.getBoundingClientRect()

        const weaponElem = document.createElement('div')
        weaponElem.style.width = '80px'
        weaponElem.style.height = '80px'
        weaponElem.style.position = 'absolute'
        document.querySelector('.objects').appendChild(weaponElem)
        const weapon = new attackWeapon(weaponElem)

        switch (direction) {
            case 'top':
                weapon.setPositionPX(window.innerWidth - x - 60, y - 80)
                this.removeMovementClasses(this.hero)
                this.hero.classList.add('attacktop')
                break
            case 'bottom':
                weapon.setPositionPX(window.innerWidth - x - 60, y + 80)
                this.removeMovementClasses(this.hero)
                this.hero.classList.add('attackbottom')
                break
            case 'right':
                weapon.setPositionPX(window.innerWidth - x - 130, y)
                this.removeMovementClasses(this.hero)
                this.hero.classList.add('hero-attackX')
                this.hero.classList.add('attackright')
                break
            case 'left':
                this.removeMovementClasses(this.hero)
                this.hero.classList.add('hero-attackX')
                this.hero.classList.add('attackleft')
                weapon.setPositionPX(window.innerWidth - x, y)
                break
            default:
                weapon.setPositionPX(window.innerWidth - x - 60, y + 80)
                this.removeMovementClasses(this.hero)
                this.hero.classList.add('attackbottom')
                break
        }



        collider.detectImpact()

        if (this.collision) {

            collider.colliderList.forEach(i => {
                if (i.instance.collision && i.instance.type === 'enemy') {
                    i.instance.lives -= 1
                    if (i.instance.lives < 1) {
                        i.instance.destroyInstance()

                    }

                }
            })
        }

        setTimeout(() => {
            this.removeMovementClasses(this.hero)
            let returnDirection
            if (direction === 'top') returnDirection = 'back'
            else if (direction === 'bottom') returnDirection = 'front'
            else returnDirection = direction
            if (returnDirection === null) {
                this.hero.classList.add('front1')
            }
            this.hero.classList.add(returnDirection + this.movementTicker)
            weapon.destroyInstance()
        }, 200)

    }
}

export class teleporter extends collider {
    constructor(DOMELEMENT, screen) {
        super(DOMELEMENT)
        this.type = 'teleport'
        this.screen = screen
    }
}


export class enemy extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.enemy = DOMELEMENT
        this.lives = 2
        this.type = 'enemy'
        this.movingUp = true

        const enemyInterval = setInterval(() => {
            this.attack()
        }, 4500)

        collider.intervalList.push(enemyInterval)


    }

    attack = () => {
        if (!this.destroyed) {
            this.enemy.classList.add('enemycharge')

            const attackInterval = setInterval(() => {
                if (this.movingUp) {
                    this.moveUp()
                    this.movingUp = false
                }
                else {
                    this.moveDown()
                    this.movingUp = true
                }
            }, 3000)

            collider.intervalList.push(attackInterval)

            const heroElement = collider.colliderList.filter(item => item.instance.getHeroStatus())
            const hero = heroElement.length > 0 ? heroElement[0] : null
            if (hero !== null) {
                // find slope and fire projectile in direction here
                const x1 = hero.element.getBoundingClientRect().x
                const y1 = hero.element.getBoundingClientRect().y
                const x2 = this.element.getBoundingClientRect().x
                const y2 = this.element.getBoundingClientRect().y

                const projElem = document.createElement('div')
                projElem.classList.add('projectile')
                projElem.setAttribute('style', `
            position: absolute;
            right: ${window.innerWidth - x2 - (this.enemy.getBoundingClientRect().width / 2)}px;
            top: ${y2 + (this.enemy.getBoundingClientRect().height / 2)}px;
            `)
                document.querySelector('.objects').appendChild(projElem)

                const projectileObject = new projectile(projElem)

                const travelTime = setInterval(() => {
                    const currTop = parseInt(projectileObject.element.style.top.split('px')[0])
                    const currRight = parseInt(projectileObject.element.style.right.split('px')[0])

                    const rise = y2 - y1
                    const run = x2 - x1

                    const Y = - rise / 60
                    const X = run / 60

                    const newTop = currTop + Y + 'px'
                    const newRight = currRight + X + 'px'

                    projElem.style.top = newTop
                    projElem.style.right = newRight

                    let rect1 = hero.element.getBoundingClientRect()
                    let rect2 = projElem.getBoundingClientRect()

                    let overlap = !(
                        rect1.top > rect2.bottom ||
                        rect1.right < rect2.left ||
                        rect1.bottom < rect2.top ||
                        rect1.left > rect2.right
                    );


                    if (overlap || currTop > window.innerHeight || currRight > window.innerWidth) {

                        projectileObject.destroyInstance()
                        clearInterval(travelTime)
                    }


                }, 50)

                collider.intervalList.push(travelTime)

                setTimeout(() => {
                    this.enemy.classList.remove('enemycharge')
                }, 400)



            }
        }




    }





}
