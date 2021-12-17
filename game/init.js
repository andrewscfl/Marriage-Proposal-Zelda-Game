import StartScreenMarkup from './views/startscreen'
import SpawnScreenMarkup from './views/spawn'
import StartScreenEvent from './input/eventlisteners/startscreenevent'
import paintSpawn from './engine/painting/paintSpawn'

export default function(){
    const game = document.querySelector('.game')
    game.innerHTML = StartScreenMarkup
    StartScreenEvent((e) => {
        game.innerHTML = SpawnScreenMarkup
        paintSpawn(() => {
           
        })
    })

}