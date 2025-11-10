import gsap from "gsap"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"
import TextPlugin from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin, SplitText, ScrambleTextPlugin)


export function gsapLights(props: GSAPTweenVars, y: number) {
  return (element: HTMLElement) => {
    gsap.fromTo(element, { x: -400, y: y }, { x: innerWidth, repeat: -1, yoyo: true, ...props })
  }
}

export function gsapLightsReverse(props: GSAPTweenVars, y: number) {
  return (element: HTMLElement) => {
    gsap.fromTo(element, { x: innerWidth, y: y }, { x: -400, repeat: -1, yoyo: true, ...props })
  }
}



