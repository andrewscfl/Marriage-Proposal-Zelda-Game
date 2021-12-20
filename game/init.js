import StartScreenMarkup from './views/startscreen'
import SpawnScreenMarkup from './views/spawn'
import Stage1Markup from './views/stage1screen'
import StartScreenEvent from './input/eventlisteners/startscreenevent'
import paintSpawn from './engine/painting/paintSpawn'
import paintStage1 from './engine/painting/paintStage1'

export default function(){
    const game = document.querySelector('.game')
    game.innerHTML = StartScreenMarkup
    StartScreenEvent((e) => {
        game.innerHTML = SpawnScreenMarkup
        paintSpawn()
    })
    document.addEventListener('change-screen', (event) => {
        const hero = event.detail.hero
        hero.instance.clearStage()
        document.body.innerHTML = `<div class="game">${Stage1Markup}</div>`
        paintStage1()
    })

    


}