import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Header from '../components/Header';
import Themes from '../components/Themes';
import IntroOverlay from '../components/IntroOverlay';

const tl = gsap.timeline();
const homeAnimation = () => {
    tl.from('body', 0, {
        css: {
            visibility: 'hidden',
        }
    }).to('body', 0, {
        css: {
            visibility: 'visible'
        }
    })
        .from(".line span", 1.8, {
            y: 100,
            ease: 'power4.out',
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            }
        })
        .to(".overlay-top", 1.6, {
            height: 0,
            ease: "expo.inOut",
            stagger: 0.4
        }).to('.overlay-bottom', 1.6, {
            width: 0,
            ease: 'expo.inOut',
            delay: -.8,
            stagger: {
                amount: 0.4,
            }
        })
        .to('.intro-overlay', 0, {
            css: {
                display: 'none'
            }
        })
        .from('.image img', 1.6, {
            scale: 1.4,
            ease: 'expo.inOut',
            delay: -.2,
            stagger: {
                amount: 0.4
            },
            // onComplete: completeAnimation

        })

}

const Home = () => {


    useEffect(() => {
        homeAnimation()
    }, [])

    return (
        <>

            <IntroOverlay />
            <Header />
            <Themes />
        </>
    );
}

export default Home;