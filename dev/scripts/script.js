import { handAnimationInit } from './hand-animation.js'
import { projectCartoneInit } from './project-cartone.js'

document.addEventListener('DOMContentLoaded', () => {
  const MAXSKILLSROTATION = 5
  const skillItems = document
    .querySelectorAll('.info-skills__item')
    .forEach((skillItem) => {
      const randomRotation = Math.floor(
        Math.random() * MAXSKILLSROTATION * 2 - MAXSKILLSROTATION
      )
      skillItem.style.transform = `rotate(${randomRotation}deg)`
    })
  if (window.location.href.indexOf('test') > -1) {
    projectCartoneInit()
  } else {
    handAnimationInit()
  }
})
