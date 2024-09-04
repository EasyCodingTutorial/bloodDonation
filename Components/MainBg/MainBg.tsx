"use client"
import React, { useEffect, useState } from 'react'

import styles from './MainBg.module.css'

const Images = [
    '/assets/Home1.jpg',
    '/assets/Home2.jpg'
]

export const MainBg = () => {
    const [currectImageIndex, setCurrectImageIndex] = useState(0)

    const handleNext = () => {
        setCurrectImageIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        )
    }


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 10000)

        return () => clearInterval(interval)

    }, [currectImageIndex])


    return (
        <div className={styles.MainBg}>
            <div>
                <div key={currectImageIndex}>
                    <img src={Images[currectImageIndex]} alt="" />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>Easy Life Flow.</h6>
                <h5>Give a Drop, Save a Life!</h5>
            </div>
        </div>
    )
}
