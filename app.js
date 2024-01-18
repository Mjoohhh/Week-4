const randomNumberFeedback = document.querySelector("#randomNumber")
const generateRandomBtn = document.querySelector("#generateRandomBtn")

generateRandomBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    console.log(randomNumber)

    const feedbackMesssage = `Random Number: ${randomNumber}`
    console.log(feedbackMesssage)

    randomNumberFeedback.innerHTML = feedbackMesssage
})