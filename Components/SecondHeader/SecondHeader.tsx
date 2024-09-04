import React from 'react'

import styles from './SecondHeader.module.css'

interface SecondHeaderProps {
    VideoUrl: string,
}

export const SecondHeader = (
    {
        VideoUrl
    }: SecondHeaderProps
) => {
    return (
        <div className={styles.SecondHeader}>
            <div>
                <video src={VideoUrl} autoPlay muted loop></video>
            </div>
        </div>
    )
}
