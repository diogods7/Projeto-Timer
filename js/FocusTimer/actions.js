import state from "./state.js";
import * as element from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sound.js'

export function toggleRunning () {
   state.isRunning = document.documentElement.classList.toggle('running')

   timer.countdown()
   sounds.buttonPressAudio.play
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.buttonPressAudio.play()
}

export function set(){
    element.minutes.setAttribute('contenteditable', true)
    element.minutes.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
    }

    sounds.bgAudio.pause()
}