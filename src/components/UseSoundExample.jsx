import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import kesariya from "../assets/mp3/Kesariya.mp3"
import styles from "./UseSoundExample.module.scss"

const UseSoundExample = () => {
    // const [
    //     play, 
    //     {
    //         stop,
    //         pause,
    //         duration,
    //         sound
    //     }
    // ] = useSound(kesariya);
    // console.log('stop, pause, duration, sound', stop, pause, duration, sound)

    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [playedSeconds, setPlayedSeconds] = useState(0);

    const [play, { stop, pause, duration, sound }] = useSound(
        kesariya,
        { 
            volume: 0.5,
        }
    );

    const playMusic = () => {
        setIsPlaying(true)
        setIsPaused(false) 
        play()
    }

    const pauseMusic = () => {
        setIsPlaying(false)
        setIsPaused(true)
        pause()
    }

    const stopMusic = () => {
        setIsPlaying(false)
        setIsPaused(false)
        setPlayedSeconds(0)
        stop()
    }
    
    const convertSecToMin = (timeInSec) => {
        if(!timeInSec && timeInSec !== 0) return "--:--"
        let min = Math.floor(timeInSec/60)
        min = (min < 10 ? "0" : "") + min
        let sec = Math.round(timeInSec % 60)
        sec = (sec < 10 ? "0" : "") + sec
        return min + ":" + sec
    }

    const totalTime = Math.round(sound?._duration)
    const widthPerSecond = 100/sound?._duration

    useEffect(() => {
        const x = isPlaying && setInterval(() => {
            setPlayedSeconds(prev => {
                if(prev >= totalTime){
                    clearInterval(x)
                    return prev
                }
                return prev + 1
            })
        }, 1000);
        
        return () => {
            clearInterval(x)
        }
    }, [isPlaying])

    console.log('widthPercentage', playedSeconds, totalTime)
    return (  
        <div>
            <h1>Use Sound Example</h1>
            <div className={styles.progressContainer}>
                <div 
                    className={`${styles.progressBar} ${isPlaying || isPaused ? styles.isPlaying : ""}`}
                    style={{ width: `${playedSeconds * widthPerSecond}%`, transition: `width linear 1s` }}
                ></div>
                <span className={styles.timeStampContainer}>
                    <span>{convertSecToMin(playedSeconds)}</span>
                    <span>{convertSecToMin(totalTime)}</span>
                </span>
            </div>
            {
                !isPlaying ?
                <button onClick={playMusic}>Play</button>
                :
                <button onClick={pauseMusic}>Pause</button> 
            }
            <button onClick={stopMusic}>Stop</button>

{/* <button
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
    >
        Hover over me!
    </button> */}
        </div>
    );
}
 
export default UseSoundExample;