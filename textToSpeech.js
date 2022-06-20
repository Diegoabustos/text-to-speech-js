let speech = new SpeechSynthesisUtterance();

speech.lang  = "en";
let voices = []; // global array

window.speechSynthesis.onvoiceschanged = () => {
    // Get list of voices
    voices = window.speechSynthesis.getVoices();

    // Initially set the First Voice in the Array
    speech.voice = voices[0];

    // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};



// Rate
document.querySelector('#rate').addEventListener("input", () => {
    // Get rate Value from the input
    const rate = document.querySelector("#rate").value;

    // Set rate property of the SpeechSynthesisUtterance instance
    speech.rate = rate;
    
    // Update the rate label
    document.querySelector("#rate-label").innerHTML = rate;
});


// Volume
document.querySelector("#volume").addEventListener("input", () => {
    // Get volume Value from the input
    const volume = document.querySelector("#volume").value;

    // Set volume property of the SpeechSynthesisUtterance instance
    speech.volume = volume;
    
    // Update the volume label
    document.querySelector("#volume-label").innerHTML = volume;
});


// Pitch
document.querySelector("#pitch").addEventListener("input", () => {
    // Get pitch from the input
    const pitch = document.querySelector("#pitch").value;

    // Set pitch property of the SpeechSynthesUtterance instance
    speech.pitch = pitch;

    // Update the pitch label
    document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
});

// Start
document.querySelector("#start").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Pause
document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

// Resume
document.querySelector("#resume").addEventListener("click", () => {
    window.SpeechSynthesis.resume();
});

// Cancel
document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});



