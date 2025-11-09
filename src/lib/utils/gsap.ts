import gsap from "gsap"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"
import TextPlugin from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin, SplitText, ScrambleTextPlugin)

export function gsapFrom(props: GSAPTweenVars) {
  return (element: HTMLElement) => {
    gsap.from(element, {
      opacity: 0,
      x: 30,
      ease: "power3",
      ...props
    })
  }
}

export function gsapTo(props: GSAPTweenVars) {
  return (element: HTMLElement) => {
    gsap.to(element, { ...props })
  }
}

export function gsapLights(props: GSAPTweenVars, y: number) {
  return (element: HTMLElement) => {
    gsap.fromTo(element, {x: -400, y: y}, {x: innerWidth, repeat: -1, yoyo: true, ...props})
  }
}

export function gsapLightsReverse(props: GSAPTweenVars, y: number) {
  return (element: HTMLElement) => {
    gsap.fromTo(element, {x: innerWidth, y: y}, {x: -400, repeat: -1, yoyo: true, ...props})
  }
}

export function gsapScrambleText(text: string) {
  return (element: HTMLElement) => {
    gsap.to(element, {
      duration: 1,
      delay: 0.5,
      scrambleText: text,
      ease: "power2.in"
    });
  }
}

