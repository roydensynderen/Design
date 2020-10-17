gsap.registerPlugin(ScrollTrigger);

function initNavigation() {
    const mainNavLinks = gsap.utils.toArray('.main-nav a');
    const mainNavLinksRev = gsap.utils.toArray('.main-nav a').reverse();

    mainNavLinks.forEach(link => {
        link.addEventListener('mouseleave', e => {
            link.classList.add('animate-out');
            // setTimeout(() => {
            //     link.classList.remove('animate-out');
            // }, 300);
        });

        link.ontransitionend = function() {
            link.classList.remove('animate-out');
        }
    });

    function navAnimation(direction) {
        const scrollingDown = direction === 1;
        const links = scrollingDown ? mainNavLinks : mainNavLinksRev;

        return gsap.to(links, {
            duration: 0.3, 
            stagger: 0.05, 
            autoAlpha: () => scrollingDown ? 0 : 1,
            y: () => scrollingDown ? 20 : 0,
            ease: 'power4.out'
        });
    }

    ScrollTrigger.create({
        start: 100,
        end: 'bottom bottom-=20',
        toggleClass: {
            targets: 'body',
            className: 'has-scrolled'
        },
        onEnter: ({ direction }) => navAnimation(direction),
        onLeaveBack: ({ direction }) => navAnimation(direction)
    })
}

function initHeaderTilt() {
    document.querySelector('header').addEventListener('mousemove', moveImages);
}

function moveImages(e) {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPos = (offsetX/clientWidth) - 0.5;
    const yPos = (offsetY/clientHeight) - 0.5;

    const modifier = index => index*1.2+0.5;

    const leftImages = gsap.utils.toArray('.hg__left .hg__image');
    const rightImages = gsap.utils.toArray('.hg__right .hg__image');

    leftImages.forEach((image, index) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos*20*modifier(index),
            y: yPos*30*modifier(index),
            rotationX: yPos*10,
            rotationY: xPos*40,
            ease: 'power3.out'
        })
    });

    rightImages.forEach((image, index) => {
        gsap.to(image, {
            duration: 1.2,
            x: xPos*20*modifier(index),
            y: -yPos*30*modifier(index),
            rotationX: yPos*10,
            rotationY: xPos*40,
            ease: 'power3.out'
        })
    });

    gsap.to('.decor__circle', {
        duration: 1.7,
        x: xPos*100,
        y: yPos*120,
        ease: 'power4.out'
    });
}

function init(){
    initNavigation();
    initHeaderTilt();
}

window.addEventListener('load', function(){
    init();
});
