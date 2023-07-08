import { useState } from "react";


const Timepass = () => {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
    const [osc, setOsc] = useState({});

    function beep(oscillator, frequency, volume, type, callback) {
        // var oscillator = audioCtx.createOscillator();
        let gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        if (volume){gainNode.gain.value = volume;}
        if (frequency){oscillator.frequency.value = frequency;}
        if (type){oscillator.type = type;}
        if (callback){oscillator.onended = callback;}
        
        oscillator.start(audioCtx.currentTime);
        // const myButton = document.getElementById("myButton")
        // myButton.addEventListener("mouseup", () => {
        //     console.log("up")
        //     oscillator.stop();
        // })
    };
    return (  
        <div>
            <button onMouseDown={() => {
                let oscillatorA = audioCtx.createOscillator();
                setOsc({...osc, oscillatorA})
                beep(oscillatorA, 400)
            }}
            onMouseUp={() => {
                osc.oscillatorA.stop()
            }}
            >A</button>
            <button onMouseDown={() => {
                let oscillatorB = audioCtx.createOscillator();
                setOsc({...osc, oscillatorB})
                beep(oscillatorB, 500)
            }}
            onMouseUp={() => {
                osc.oscillatorB.stop()
            }}
            >B</button>
        </div>
    );
}
 
export default Timepass;