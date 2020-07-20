
let lastRenderTime = 0
const snakeSpeed = 2

function main(currentTime) {

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime



    console.log("render")

}

window.requestAnimationFrame(main)