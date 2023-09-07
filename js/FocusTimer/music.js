import state from './state.js'
const tree = document.getElementById("tree")


export function toggleTree (){
  state.isMute = document.documentElement.classList.toggle('music-on')
  tree.document.classList.add("tree-focus")
  console.log("entroi")
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