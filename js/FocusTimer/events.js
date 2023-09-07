import { controlsActions, controlsMusic } from "./elements.js";
import * as actions from './actions.js'
import * as elements from "./elements.js";
import state from './state.js'
import { updateDisplay } from "./timer.js";
import * as musics from './music.js';

export function registerControls() {
    controlsActions.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }
        console.log(action)
        actions[action]()
    })

    controlsMusic.addEventListener('click', (event) => {
        const music = event.target.dataset.action
        if(typeof musics[music] != "function"){
            return
        }
        musics[music]()
    })
}

export function setMinutes() {
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ""
    })
        
        elements.minutes.onkeypress = (event) =>  /\d/.test(event.key)
        
        elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        elements.minutes.removeAttribute('contenteditable')
    })
}
