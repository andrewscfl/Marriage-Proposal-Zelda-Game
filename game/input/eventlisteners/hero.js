export default class {
    constructor(heroClass){
        this.hero = heroClass
        document.addEventListener('keydown', (e) => {
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
                default:
                    console.log(e)
            }
        })
    }
  
}