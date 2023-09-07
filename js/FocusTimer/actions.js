import state from './state.js'
import * as element from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sound.js'


export function toggleRunning () {
   state.isRunning = document.documentElement.classList.toggle('running')

   timer.countdown()
   sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.buttonPressAudio.play()
    element.minutes.setAttribute('contenteditable', true)
    element.minutes.focus()
}

export function more() {
    if (state.minutes < 55){
        state.minutes += 5;
    } else if (state.minutes > 54) {
        state.minutes = 60;
    }
    timer.updateDisplay()
}

export function less() {
    if (state.minutes < 5){
        state.minutes = 0;
    } else if (state.minutes >= 5) {
        state.minutes -= 5;
    }
    timer.updateDisplay()
}