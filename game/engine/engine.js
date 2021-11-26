export class collider {
    static colliderList = []
    constructor(DOMELEMENT) {
        this.element = DOMELEMENT
        this.momentumX = null
        this.momentumY = null
        this.collision = false



        collider.colliderList.push({
            element: DOMELEMENT,
            instance: this,
        })
    }

    static watchCollision = () => {
        //check for collision every 200 ms
        setInterval(() => {
            // check for collision
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
                }
            }

        }, 50)
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

        if (this.collision) {
            this.collision = false
            return this.move(direction, !isPositive)
        }

        let current = parseInt(this.element.style[direction].replace('px', ''))
        let newVal = isPositive ? current += 2 : current -= 2
        let newValPx = newVal + 'px'
        this.element.style[direction] = newValPx

    }


    moveRight = () => {
        this.momentumX = 'right'
        this.move('right', true)
    }
    moveLeft = () => {
        this.momentumX = 'left'
        this.move('right', false)
    }
    moveUp = () => {
        this.momentumY = 'top'
        this.move('top', false)
    }
    moveDown = () => {
        this.momentumY = 'down'
        this.move('top', true)
    }


}
export class hero extends collider {
    constructor(DOMELEMENT) {
        super(DOMELEMENT)
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