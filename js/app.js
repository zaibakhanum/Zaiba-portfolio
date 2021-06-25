const themeBtn1 = document.querySelector('#themeBtn1')
const themeBtn2 = document.querySelector('#themeBtn2')

themeBtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
themeBtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 3,
    delay: 1
}).to('#y-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .8
}, '-=5').to('#y-2', {
    x: '150px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5').to('#r-1', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .6
}, '-=5')

const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })


tl2.from('.hero img', {
    opacity: 0,
    y: '-20%',
    duration: 2,
    delay: 1
}).from('.hero .heroTitle', {
    opacity: 0,
    y: '100%',
    duration: 1
}, '-=2').from('.hero .heroBtns #btn', {
    opacity: 0,
    y: '100%',
    duration: .2,
    stagger: .3
}, '-=1').from('.navbar', {
    opacity: 0,
    duration: 2,
    delay: 1
}, '-=2')
const scrollAbt = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})

scrollAbt.from('.about .title', {
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.about .aboutContent span', {
    y: '50%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})

const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})
scrollSkills.fromTo('.skills .title', {
    x: '-100%',
    opacity: 0, 
},{
    x:"0%",
    opacity: 1,
    duration: 0.7
}).from('.skills .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')
const scrollAchievments = gsap.timeline({
    scrollTrigger: {
        trigger: '.achievments',
        // markers: true,
        start: '400px bottom',
        end: 'top top',
        // scrub: true
    }
})
scrollAchievments.fromTo('.achievments .title', {
    x: '-100%',
    opacity: 0,
}, {
    opacity: 1,
    x: "0%",
    duration: 0.7
}).from('.achievments .cardRow .card', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')

const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        //markers: true,
        start: 'top bottom',
        end: 'top center',
        //scrub: true
    }
})
// scrollContact.to(".contact .title",{
//     opacity: 0,
//     x:"-100%",
//     duration:0.7
// }).from('.contact .iconRow .icon', {
//     x: '-100%',
//     opacity: 0,
//     duration: 0.5,
//     stagger: .1
// }, '-=0.6')
scrollContact.fromTo(".contact .title", {
     opacity: 0,
     x: "-100%",
},{
    opacity: 1,
    x: "0%",
    duration: 0.7
}).from('.contact .iconRow .icon', {
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    stagger: .1
}, '-=0.6')
