const init = () => countDown()

const countDown = () => {
    let numStart = Number(prompt("Pick a number to start the countdown from."));
    console.log("Countdown initiated...")
    if (Number.isNaN(numStart) == true) {
        alert("Please enter a valid number!");
        countDown();
    } else {
        for (let i = numStart; i >= 0; i--) {
        console.log(i);
        }
    }
    console.log("Takeoff!")
}

init();