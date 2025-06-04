let countQuem = 1;
let intervalIdQuem;
let userInteractedQuem = false;
let resetTimeoutIdQuem;

document.getElementById("radio1-quem").checked = true;

function nextImageQuem() {
    if (!userInteractedQuem) {
        countQuem++;
        if (countQuem > 5) {
            countQuem = 1;
        }
        document.getElementById("radio" + countQuem + "-quem").checked = true;
    }
}

intervalIdQuem = setInterval(nextImageQuem, 5000);

const radiosQuem = document.querySelectorAll('input[name="radiobtn-quem"]');
radiosQuem.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        countQuem = index + 1;
        userInteractedQuem = true;

        clearInterval(intervalIdQuem);
        clearTimeout(resetTimeoutIdQuem);

        resetTimeoutIdQuem = setTimeout(() => {
            userInteractedQuem = false;
            intervalIdQuem = setInterval(nextImageQuem, 5000);
        }, 10000);
    });
});