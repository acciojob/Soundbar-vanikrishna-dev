//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

const audioElements = {};

sounds.forEach(sound => {
	const audio = new Audio(`sounds/${sound}.mp3`);
	audioElements[sound] = audio;
});

document.querySelectorAll(".btn").forEach(button => {
	button.addEventListener("click", () => {
		const sound = button.innerText;

		if (button.classList.contains("stop")) {
			stopAllSounds();
		} else {
			stopAllSounds();
			audioElements[sound].play();
		}
	});
});

function stopAllSounds() {
	for (let key in audioElements) {
		audioElements[key].pause();
		audioElements[key].currentTime = 0;
	}
}