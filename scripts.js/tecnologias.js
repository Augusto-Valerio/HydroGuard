let count = 1;
let intervalId;
let userInteracted = false;
let resetTimeoutId;

document.getElementById("radio1").checked = true;

function nextImage() {
    if (!userInteracted) {
        count++;
        if (count > 7) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
    }
}

intervalId = setInterval(nextImage, 5000);

const radios = document.querySelectorAll('input[name="radiobtn"]');
radios.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        count = index + 1;
        userInteracted = true;

        clearInterval(intervalId);

        clearTimeout(resetTimeoutId);

        resetTimeoutId = setTimeout(() => {
            userInteracted = false;
            intervalId = setInterval(nextImage, 5000);
        }, 10000);
    });
});
