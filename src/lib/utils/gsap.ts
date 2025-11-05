import gsap from "gsap"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"
import TextPlugin from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin, SplitText, ScrambleTextPlugin)

export function gsapFrom(props: GSAPTweenVars) {
  return (element: HTMLElement) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
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
export function gsapText() {
  return (element: HTMLElement) => {
    let text = SplitText.create(element, { type: "words", aria: "hidden" })
    gsap.from(text.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
    });
  }
}

export function gsapTexts(text: string) {
  return (element: HTMLElement) => {
    gsap.to(element, {
      duration: 1,
      delay: 1,
      scrambleText: text,
      ease: "power2.in"
    });
  }
}

