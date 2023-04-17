var context = new AudioContext


//SCRIPT FOR RECORDED DRUM SOUNDS
const kickSound = "kick.wav"
fetch(kickSound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const kickDrum = document.getElementById('kick');

  kick.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const snareSound = "snare.wav"
fetch(snareSound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const snareDrum = document.getElementById('snare');

  snare.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const highTom1sound = "highTom1.wav"
fetch(highTom1sound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const highTom1Drum = document.getElementById('highTom1');

  highTom1.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const highTom2sound = "highTom2.wav"
fetch(highTom2sound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const highTom2Drum = document.getElementById('highTom2');

  highTom2.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const lowTomSound = "lowTom.wav"
fetch(lowTomSound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const lowTomDrum = document.getElementById('lowTom');

  lowTom.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const cymbal1sound = "cymbal1.wav"
fetch(cymbal1sound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const cymbal1Drum = document.getElementById('cymbal1');

  cymbal1.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});

const cymbal2sound = "cymbal2.wav"
fetch(cymbal2sound)
.then(response => response.arrayBuffer())
.then(buffer=> context.decodeAudioData(buffer))
.then(audioBuffer => {

  const cymbal2Drum = document.getElementById('cymbal2');

  cymbal2.addEventListener('click', () => {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination)

    source.start(0);
  });

});





//Piano script

var recorder;
const audioContext = new AudioContext;
let currentOscillator = null;
var myNoiseGain = new GainNode(audioContext);




// Define Frequencies for C and D
const noteFrequencies = {
    'c': 261.63,
    'cSHARP': 277.18,
    'd': 293.66,
    'dSHARP': 311.13,
    'e': 329.63,
    'f': 349.23,
    'fSHARP': 369.99,
    'g': 392.00,
    'gSHARP': 415.30,
    'a': 440.00,
    'aSHARP': 466.16,
    'b': 493.88,
};

//SCRIPT FOR RECORDED PIANO SOUNDS

const cRsound = "piano_middle_C.mp3"
fetch(cRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const cRsoundPiano = document.getElementById('cR');

  cR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const cRSHARPsound = "piano_C_sharp.mp3"
fetch(cRSHARPsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const cRSHARPsoundPiano = document.getElementById('cRSHARP');

  cRSHARP.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const dRsound = "piano_D.mp3"
fetch(dRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const dRsoundPiano = document.getElementById('dR');

  dR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const dRSHARPsound =  "piano_D_sharp.mp3"
fetch(dRSHARPsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const dRSHARPsoundPiano = document.getElementById('dRSHARP');

  dRSHARP.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const eRsound = "piano_E.mp3"
fetch(eRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const eRsoundPiano = document.getElementById('eR');

  eR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const fRsound = "piano_F.mp3"
fetch(fRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const fRsoundPiano = document.getElementById('fR');

  fR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const fRSHARPsound =  "piano_F_sharp.mp3"
fetch(fRSHARPsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const fRSHARPsoundPiano = document.getElementById('fRSHARP');

  fRSHARP.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const gRsound = "piano_G.mp3"
fetch(gRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const gRsoundPiano = document.getElementById('gR');

  gR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const gRSHARPsound =  "piano_G_sharp.mp3"
fetch(gRSHARPsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const gRSHARPsoundPiano = document.getElementById('gRSHARP');

  gRSHARP.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const aRsound = "piano_A.mp3"
fetch(aRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const aRsoundPiano = document.getElementById('aR');

  aR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});

const aRSHARPsound =  "piano_A_sharp.mp3"
fetch(aRSHARPsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const aRSHARPsoundPiano = document.getElementById('aRSHARP');

  aRSHARP.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)

    source.start(0);
  });

});


const bRsound = "piano_B.mp3"
fetch(bRsound)
.then(response => response.arrayBuffer())
.then(buffer=> audioContext.decodeAudioData(buffer))
.then(audioBuffer => {

  const bRsoundPiano = document.getElementById('bR');

  bR.addEventListener('click', () => {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination)
    source.connect(myNoiseGain)
    source.start(0);
  });

});



// Function to Play Piano Sound
function playSound(note) {
    if (currentOscillator) {
        currentOscillator.stop();
    }

    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = noteFrequencies[note] || 0;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
    currentOscillator = oscillator;
    currentOscillator.connect(myNoiseGain)
  }

  //Recorder script
recorder = new Recorder(myNoiseGain) 
Start.onclick = () => {
    audioContext.resume()
    recorder.record()
}
Stop.onclick = () => {
    recorder.stop()
    recorder.exportWAV(blob => document.querySelector("audio").src = URL.createObjectURL(blob))
}

