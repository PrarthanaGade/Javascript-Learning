// Initialize SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();
let voices = [];

// Select the voice dropdown
let voiceSelect = document.querySelector("select"); // Replace "select" with your dropdown selector if different

// Populate voices when they change
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // Default voice

  // Populate the dropdown with available voices
  voices.forEach((voice, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
};

// Update the voice when a new one is selected
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Add click event for the speak button
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value; // Text input for conversion
  window.speechSynthesis.speak(speech); // Perform text-to-speech
});
