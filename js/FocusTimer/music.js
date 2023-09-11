import state from './state.js'
import * as sounds from './sound.js'
import * as element from './elements.js'


export function toggleTree (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.buttonTree.play()
    element.tree.classList.add("tree-focus")
  }
  else{
    sounds.buttonTree.pause()
    element.tree.classList.remove("tree-focus")
  }
}

export function toggleRain (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.buttonRain.play()
    element.rain.classList.add("rain-focus")
  }
  else{
    sounds.buttonRain.pause()
    element.rain.classList.remove("rain-focus")
  }

}

export function toggleCoffee (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.buttonCoffee.play()
    element.coffee.classList.add("coffee-focus")
  }
  else{
    sounds.buttonCoffee.pause()
    element.coffee.classList.remove("coffee-focus")
  }

}

export function toggleFire (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.buttonFire.play()
    element.fire.classList.add("fire-focus")
  }
  else{
    sounds.buttonFire.pause()
    element.fire.classList.remove("fire-focus")
  }
}