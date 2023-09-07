import state from './state.js'
import * as element from './elements.js'


export function toggleTree (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  console.log(element.tree)
}

export function toggleRain (){
  state.isMute = document.documentElement.classList.toggle('music-on')
}

export function toggleCoffee (){
  state.isMute = document.documentElement.classList.toggle('music-on')
}

export function toggleFire (){
  state.isMute = document.documentElement.classList.toggle('music-on')
}