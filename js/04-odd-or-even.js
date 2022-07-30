const init = () => numFunc();

const numFunc = () => {
    let oddEven;
    console.log("Beginning calculations!")
    for (let i = 0; i < 16; i++) {
        oddEven = i;
        if (oddEven % 2 != 0) {
            console.log(`${oddEven} is odd!`);
        } else {
            console.log(`${oddEven} is even!`);
        }
    }
    console.log("Calculations are complete!");
}

init()