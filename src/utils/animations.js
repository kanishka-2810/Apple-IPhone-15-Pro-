import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, ScrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse', //scroll [in out(comeback) down up]
            start: 'top 85%', //when top of the trigger is in 85% viewport, animation activates
            ...ScrollProps
        }
    })
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        ease: 'power2.inOut',
        duration: 1
    })

    timeline.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    },
        '<'
        // '<' symbolizes to insert the animation at the start of the previous animation
    )

    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<'
    )
}