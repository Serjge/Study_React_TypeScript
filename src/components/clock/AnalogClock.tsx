import React, {useEffect, useState} from 'react';
import styles from './AnalogClock.module.css'

export const AnalogClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const minuts = date.getMinutes();
    const minutsDegrees = ((minuts / 60) * 360) + ((seconds / 60) * 6) + 90;

    const hours = date.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((minuts / 60) * 30) + 90;


    return (
        <div className={styles.clock}>
            <div className={styles.clockFace}>
                <div style={{transform: `rotate(${secondsDegrees}deg)`}}
                     className={`${styles.hand} ${styles.hour_hand} `}/>

                <div style={{transform: `rotate(${minutsDegrees}deg)`, width: '45%', left: '5%'}}
                     className={`${styles.hand} ${styles.min_hand}`}/>

                <div style={{transform: `rotate(${hourDegrees}deg)`, width: '40%', left: '10%'}}
                     className={`${styles.hand} ${styles.second_hand}`}/>

            </div>
        </div>
    );
};



