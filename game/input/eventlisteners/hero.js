export default class {
    constructor(heroClass){
        this.hero = heroClass
        document.addEventListener('keydown', this.bindMovement)
    }

    bindMovement = (e) => {
        switch(e.key) {
            case 'ArrowUp':
                this.hero.moveUp()
                break
            case 'ArrowDown':
                this.hero.moveDown()
                
                break
            case 'ArrowRight':
                this.hero.moveRight()
                
                break
            case 'ArrowLeft':
                this.hero.moveLeft()
                break
            case ' ':
                this.hero.attack()
                break
            default:
                console.log(e)
        }
    }

    pauseHero = () => {
        document.removeEventListener('mousedown', this.bindMovement)
    }

    resumeHero = () => {
        document.addEventListener('mousedown', this.bindMovement)
    }
  
}