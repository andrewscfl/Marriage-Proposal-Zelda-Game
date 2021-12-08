export class collider {
    static colliderList = []
    constructor(DOMELEMENT) {
        this.element = DOMELEMENT
        this.momentumX = null
        this.momentumY = null
        this.collision = false
        this.facingDirection = null
        this.instanceIndex = collider.colliderList.push({
            element: DOMELEMENT,
            instance: this,
        })
    }


    destroyInstance = () => {
        collider.colliderList[this.instanceIndex - 1].element.remove()
        collider.colliderList.splice(this.instanceIndex - 1,1)
    }


    getFacingDirection = () => this.facingDirection

    static checkCollisions = () => {

        for (let i = 0; i < collider.colliderList.length; i++) {
            if (i !== 0) {
                // compare if collision here
                let rect1 = collider.colliderList[i].element.getBoundingClientRect()
                let rect2 = collider.colliderList[i - 1].element.getBoundingClientRect()

                let overlap = !(
                    rect1.top > rect2.bottom ||
                    rect1.right < rect2.left ||
                    rect1.bottom < rect2.top ||
                    rect1.left > rect2.right
                );


                //end collision compare
                collider.colliderList[i].instance.collision = overlap
                collider.colliderList[i - 1].instance.collision = overlap

                if (overlap)
                    return true
            }
        }
        return false
    }

    static watchCollision = () => {
        //check for collision every 200 ms
        setInterval(() => {
            // check for collision
            collider.checkCollisions()

        }, 20)
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
        if (collider.checkCollisions()) {
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
export class hero extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
        this.hero = DOMELEMENT
    }

    attack = () => {
        const direction = this.getFacingDirection()
        const { x,y } = this.hero.getBoundingClientRect()
        console.log(x,y)
        const weaponElem = document.createElement('div')
        weaponElem.style.width = '200px'
        weaponElem.style.height = '150px'
        weaponElem.style.backgroundColor = 'green'
        weaponElem.style.position = 'absolute'
        document.body.appendChild(weaponElem)
        const weapon = new collider(weaponElem)
        weapon.setPositionPX(window.innerWidth - x - 200,y - 100)
        collider.checkCollisions()
        console.log(weapon.collision)
        setTimeout(() => weapon.destroyInstance() , 500)
        

    }
}

export class enemy extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
    }

}

export class barrier extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
    }
}