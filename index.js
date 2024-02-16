const quote = document.getElementById('quote')
const adviceNumber = document.getElementById('adviceNumber')
let adviceBtn = document.getElementById('adviceBtn')

let isFetching = false;

async function getAdvice() {
        
    adviceBtn.removeEventListener("click", function() {
        return
    })

    if (isFetching) return;
    isFetching = true;


    try {
        const response = await fetch(`https://api.adviceslip.com/advice`)
        const result = await response.json()

        adviceNumber.innerText = "ADVICE: #"
        adviceNumber.innerText += result.slip.id
        quote.innerText = `"` + result.slip.advice + `"`
    } catch (error) {
        console.log(error)
    } finally {
        isFetching = false
        adviceBtn.disabled = false
    }
}


adviceBtn.addEventListener("click", function() {

    if(quote.innerText === "Loading...") {
        return;
    }

    adviceBtn.classList.toggle('active')

    getAdvice()

    console.log("clicked")
})







