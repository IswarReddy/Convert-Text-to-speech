let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let speech = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
    speech.text = textarea.value;
    speech.voice = speechSynthesis.getVoices()[4]; 
    speechSynthesis.speak(speech);
});