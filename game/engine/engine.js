export class collider {
    static colliderList = []
    constructor(DOMELEMENT) {
        this.element = DOMELEMENT

        collider.colliderList.push({
            element: DOMELEMENT,
            rectObj: DOMELEMENT.getBoundingClientRect()
        })
    }

    watchCollision = () => {
        //check for collision every 200 ms
        setInterval(() => {
            // check for collision
            for (let i = 0; i < collider.colliderList.length; i++) {
                if (i !== 0) {
                    // compare if collision here
                    let rect1 = collider.colliderList[i].rectObj
                    let rect2 = collider.colliderList[i - 1].rectObj

                    let overlap = !(rect1.right < rect2.left ||
                        rect1.left > rect2.right ||
                        rect1.bottom < rect2.top ||
                        rect1.top > rect2.bottom)

                    console.log(overlap ? 'overlapped!' : 'not touching')

                    //end collision compare
                }
            }

        }, 2000)
    }

    setPositionPX = (x, y) => {
        this.element.style.right = `${x}px`
        this.element.style.top = `${y}px`
    }

    move = (direction, isPositive) => {
        let current = parseInt(this.element.style[direction].replace('px',''))
        let newVal = isPositive ? current += 2 : current -= 2
        let newValPx = newVal + 'px'
        this.element.style[direction] = newValPx
    }


    moveRight = () => {
       this.move('right',true)
    }
    moveLeft = () => {
        this.move('right',false)
    }
    moveUp = () => {
        this.move('top',false)
    }
    moveDown = () => {
        this.move('top',true)
    }

}
export class hero extends collider { 
    constructor(DOMELEMENT){
        super(DOMELEMENT)
    }

}


export class enemy extends collider {

}

export class barrier extends collider {

}