'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useInitAnimations = () => {
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window === 'undefined') return

        // ----------------------------------
        // INIT AOS
        // ----------------------------------
        AOS.init({
            mirror: false,
            once: true,
            delay: 0,
            duration: 1500,
            offset: 0,
        })

        // ----------------------------------
        // INIT LENIS
        // ----------------------------------
        const lenis = new Lenis({ autoRaf: false, duration: 1.5 })

        lenis.on('scroll', () => {
            AOS.refresh()
            ScrollTrigger.update()
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // ----------------------------------
        // GSAP ZOOM ANIMATION
        // ----------------------------------
        const zoomOptions = [
            { className: '.d2c_zoom_animation1', scale: 1.2, duration: 1 },
            { className: '.d2c_zoom_animation2', scale: 1.2, duration: 2 },
            { className: '.d2c_zoom_animation3', scale: 1.05, duration: 1 },
        ]

        const zoomTweens: gsap.core.Tween[] = []

        zoomOptions.forEach(({ className, scale, duration }) => {
            const elements = document.querySelectorAll(className)
            if (elements.length > 0) {
                const tween = gsap.to(elements, {
                    scale,
                    duration,
                    ease: 'power1.inOut',
                    repeat: -1,
                    yoyo: true,
                    transformOrigin: 'center',
                })
                zoomTweens.push(tween)
            }
        })

        // ----------------------------------
        // GSAP ROTATE ANIMATION
        // ----------------------------------
        const rotateTweens: gsap.core.Tween[] = []
        const rotateOptions = [
            { className: '.d2c_rotate_animation', from: -2, to: -8, duration: 1 },
        ]

        rotateOptions.forEach(({ className, from, to, duration }) => {
            const elements = document.querySelectorAll(className)
            if (elements.length > 0) {
                const tween = gsap.fromTo(
                    elements,
                    { rotate: from },
                    {
                        rotate: to,
                        duration,
                        ease: 'power1.inOut',
                        repeat: -1,
                        yoyo: true,
                        transformOrigin: 'center',
                    }
                )
                rotateTweens.push(tween)
            }
        })

        // ----------------------------------
        // scroll-animate (perspective + rotate)
        // ----------------------------------
        const scrollElements = document.querySelectorAll('.scroll-animate')

        if (scrollElements.length > 0) {
            scrollElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        transformPerspective: 1200,
                        scale: 0.8,
                        rotationX: 60,
                    },
                    {
                        scale: 1,
                        rotationX: 0,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 60%',
                            scrub: 2.5, // Smooth scrubbing
                        },
                    }
                )
            })
        }

        // ----------------------------------
        // zoom-animate (MANUAL SCROLL SCALE)
        // ----------------------------------
        const zoomElements = document.querySelectorAll('.zoom-animate')
        const zoomHandlers = new Map<HTMLElement, () => void>()

        if (zoomElements.length > 0) {
            const zoomOpt = {
                startScale: 0.7,
                endScale: 1,
                animateUntil: 0.4,
            }

            zoomElements.forEach((el) => {
                const element = el as HTMLElement
                let isVisible = false

                const observer = new IntersectionObserver(
                    ([entry]) => (isVisible = entry.isIntersecting),
                    { threshold: 0.1 }
                )
                observer.observe(element)

                const scrollHandler = () => {
                    if (!isVisible) return

                    const rect = element.getBoundingClientRect()
                    const vh = window.innerHeight

                    const end = vh * zoomOpt.animateUntil
                    const progress = Math.min(
                        Math.max((vh - rect.top) / (vh - end), 0),
                        1
                    )

                    const scale =
                        zoomOpt.startScale +
                        (zoomOpt.endScale - zoomOpt.startScale) * progress

                    element.style.transform = `scale(${scale})`
                }

                window.addEventListener('scroll', scrollHandler)
                zoomHandlers.set(element, scrollHandler)
            })
        }

        // ----------------------------------
        // Hover Tilt
        // ----------------------------------
        const cards = document.querySelectorAll('.d2c_team_card')

        const handleMouseMove = (e: MouseEvent) => {
            const card = e.currentTarget as HTMLElement
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * 10
            const rotateY = ((x - centerX) / centerX) * -10

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                transformOrigin: 'center',
                duration: 1,
                ease: 'power2.out',
            })
        }

        const handleMouseLeave = (e: MouseEvent) => {
            const card = e.currentTarget as HTMLElement
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                ease: 'power2.out',
            })
        }

        cards.forEach((card) => {
            card.addEventListener('mousemove', handleMouseMove as any)
            card.addEventListener('mouseleave', handleMouseLeave as any)
        })

        // workflows animation
        const anims = [
            { sel: ".float-up", props: { y: -30, x: 20, duration: 3 } },
            { sel: ".float-down", props: { y: 30, x: 20, duration: 3 } },

            { sel: ".drift-left", props: { x: -35, y: 20, duration: 4 } },
            { sel: ".drift-right", props: { x: 35, y: 20, duration: 4 } },

            { sel: ".orbit-small", props: { x: 45, y: -45, duration: 3 } },
            { sel: ".orbit-medium", props: { x: 25, y: 25, duration: 4 } },

            {
                sel: ".random-move",
                props: {
                    x: () => gsap.utils.random(-15, 15),
                    y: () => gsap.utils.random(-15, 15),
                    duration: () => gsap.utils.random(2, 4),
                },
            },
        ]

        anims.forEach(({ sel, props }) => {
            gsap.to(sel, {
                ...props,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            })
        })



        // ----------------------------------
        // CLEANUP ON UNMOUNT
        // ----------------------------------
        return () => {
            zoomTweens.forEach((t) => t.kill())
            rotateTweens.forEach((t) => t.kill())

            cards.forEach((card) => {
                card.removeEventListener('mousemove', handleMouseMove as any)
                card.removeEventListener('mouseleave', handleMouseLeave as any)
            })



            zoomHandlers.forEach((handler, element) => {
                window.removeEventListener('scroll', handler)
            })
            zoomHandlers.clear()

            ScrollTrigger.killAll()
        }
    }, [pathname])
}
