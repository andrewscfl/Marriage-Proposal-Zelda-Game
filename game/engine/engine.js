export class collider {
    static colliderList = []
    constructor(DOMELEMENT) {
        console.log('running')
        this.element = DOMELEMENT
        this.type = ''
        this.momentumX = null
        this.momentumY = null
        this.collision = false
        this.isHero = false
        this.facingDirection = null
        this.instanceIndex = collider.colliderList.push({
            element: DOMELEMENT,
            instance: this,
        })
    }

    destroyInstance = () => {
        collider.colliderList[this.instanceIndex - 1].element.remove()
        collider.colliderList.splice(this.instanceIndex - 1, 1)
    }


    getFacingDirection = () => this.facingDirection
    getHeroStatus = () => this.isHero

    // check if impact on any and all elements
    static detectImpact = () => {
        let impacted = false
        for (let i = 0; i < collider.colliderList.length; i++) {
            for (let x = (i + 1); x < collider.colliderList.length; x++) {
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

    //method prevents walk forward on collision
    static checkCollisions = () => {

        for (let i = 0; i < collider.colliderList.length; i++) {
            for (let x = (i + 1); x < collider.colliderList.length; x++) {
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


                if (overlap) {
                    return true
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
        let current = parseInt(this.element.style[direction].replace('px', ''))
        let newVal = isPositive ? current += 8 : current -= 8
        let newValPx = newVal + 'px'
        this.element.style[direction] = newValPx
        collider.checkCollisions()
        if (this.collision) {
            console.log('collision')
            let current = parseInt(this.element.style[direction].replace('px', ''))
            let newVal = isPositive ? current -= 8 : current += 8
            let newValPx = newVal + 'px'
            this.element.style[direction] = newValPx
        }
    }


    moveLeft = () => {
        this.facingDirection = 'left'
        this.momentumX = 'right'
        this.move('right', true)
    }
    moveRight = () => {
        this.facingDirection = 'right'
        this.momentumX = 'right'
        this.move('right', false)
    }
    moveUp = () => {
        this.facingDirection = 'top'
        this.momentumY = 'top'
        this.move('top', false)
    }
    moveDown = () => {
        this.facingDirection = 'bottom'
        this.momentumY = 'top'
        this.move('top', true)
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
    }

    attack = () => {
        const direction = this.getFacingDirection()
        console.log(direction)
        const { x, y } = this.hero.getBoundingClientRect()
        console.log(x, y)
        const weaponElem = document.createElement('div')
        weaponElem.style.width = '200px'
        weaponElem.style.height = '150px'
        weaponElem.style.backgroundColor = 'green'
        weaponElem.style.position = 'absolute'
        document.body.appendChild(weaponElem)
        const weapon = new attackWeapon(weaponElem)

        switch (direction) {
            case 'top':
                weapon.setPositionPX(window.innerWidth - x - 200, y - 100)
                break
            case 'bottom':
                weapon.setPositionPX(window.innerWidth - x - 200, y + 150)
                break
            case 'right':
                weapon.setPositionPX(window.innerWidth - x - 300, y + 25)
                break
            case 'left':
                weapon.setPositionPX(window.innerWidth - x - 100, y + 25)
                break
        }



        collider.detectImpact()

        if (this.collision) {
            console.log('collision')
            collider.colliderList.forEach(i => {
                if (i.instance.collision && i.instance.type === 'enemy') {
                    i.instance.lives -= 1
                    if (i.instance.lives < 1) {
                        i.element.style.display = 'none'
                    }

                }
            })
        }






        setTimeout(() => weapon.destroyInstance(), 200)

    }
}

export class enemy extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.enemy = DOMELEMENT
        this.lives = 2
        this.type = 'enemy'

        setInterval(() => {
            this.attack()
        }, 4000)
    }



    attack = () => {
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
            right: ${x2 + (this.enemy.getBoundingClientRect().width / 2)}px;
            top: ${y2 + (this.enemy.getBoundingClientRect().height / 2)}px;
            `)
            document.body.appendChild(projElem)

            const projectileObject = new projectile(projElem)



            const travelTime = setInterval(() => {
                const currTop = parseInt(projectileObject.element.style.top.split('px')[0])
                const currRight = parseInt(projectileObject.element.style.right.split('px')[0])
                
                const rise = y2 - y1
                const run = x2 - x1

                const Y = - rise / 60
                const X =  run / 60



                const newTop = currTop + Y + 'px'
                const newRight = currRight + X + 'px'

                projElem.style.top = newTop
                projElem.style.right = newRight




            }, 50)



        }
    }





}
