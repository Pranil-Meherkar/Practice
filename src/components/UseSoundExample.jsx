import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
// import kesariya from "/mp3/Kesariya.mp3"
import styles from "./UseSoundExample.module.scss"
import { ReactComponent as Previous } from "../assets/svg/skip-back.svg"
import { ReactComponent as Next } from "../assets/svg/skip-forward.svg"
import { ReactComponent as Play } from "../assets/svg/play.svg"
import { ReactComponent as Pause } from "../assets/svg/pause.svg"
import { ReactComponent as Stop } from "../assets/svg/square.svg"

const UseSoundExample = () => {

    const nameArray = ["Kesariya.mp3", "Qaafirana.mp3"]
    const musicPathArray = nameArray.length && nameArray.map(name => "/mp3/" + name)

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dirty, setDirty] = useState(false);

    const [play, { stop, pause, duration, sound }] = useSound(
        musicPathArray[currentIndex],
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

    const playPrev = () => {
        if(currentIndex > 0) {
            stopMusic()
            setCurrentIndex(currentIndex - 1)
        }
    }

    const playNext = () => {
        if(currentIndex < nameArray.length-1) {
            stopMusic()
            setCurrentIndex(currentIndex + 1)
        }
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
            x && clearInterval(x)
        }
    }, [isPlaying])

    useEffect(() => {
        setTimeout(() => {
            dirty && sound && playMusic()
            !dirty && sound && setDirty(true)
        }, 1200)
    }, [sound])

    return (  
        <div className={styles.background}>
            <div className={styles.mainContainer}>
                <p className={styles.songName}>{nameArray[currentIndex]}</p>
                <div className={styles.progressContainer}>
                    <span className={styles.backdrop}></span>
                    <div 
                        className={`${styles.progressBar} ${isPlaying || isPaused ? styles.isPlaying : ""}`}
                        style={{ width: `${playedSeconds * widthPerSecond}%`, transition: `width linear 1s` }}
                    ></div>
                    <span className={styles.timeStampContainer}>
                        <span>{convertSecToMin(playedSeconds)}</span>
                        <span>{convertSecToMin(totalTime)}</span>
                    </span>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={playPrev}><Previous className={styles.buttonIcon}/></button>
                    {
                        !isPlaying ?
                        <button onClick={playMusic} disabled={!sound}><Play className={styles.buttonIcon}/></button>
                        :
                        <button onClick={pauseMusic}><Pause className={styles.buttonIcon}/></button> 
                    }
                    <button onClick={stopMusic}><Stop className={styles.buttonIcon}/></button>
                    <button onClick={playNext}><Next className={styles.buttonIcon}/></button>
                </div>
            </div>
        </div>
    );
}
 
export default UseSoundExample;