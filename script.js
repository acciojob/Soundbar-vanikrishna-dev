//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
	button.addEventListener("click", () => {

		if (button.classList.contains("stop")) {
			stopAll();
			return;
		}

		const soundId = button.dataset.sound;
		const audio = document.getElementById(soundId);

		if (audio) {
			stopAll();
			audio.play();
		}
	});
});

function stopAll() {
	document.querySelectorAll("audio").forEach(audio => {
		audio.pause();
		audio.currentTime = 0;
	});
}