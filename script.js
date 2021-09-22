// Minecraft Fishing Simulator

// variables to store html elements
let steveImgEl = document.getElementById("steve-img")
let alexImgEl = document.getElementById("alex-img")
let fishBtnEl = document.getElementById("fish-btn")
let imgResultEl = document.getElementById("img-result")
let numCodEl = document.getElementById("num-cod")
let numSalmonEl = document.getElementById("num-salmon")
let numTropicalEl = document.getElementById("num-tropical")
let numPufferEl = document.getElementById("num-puffer")

// Global Variables
let character = "Steve";

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

// Event Functions
function selectSteve() {
    // Update Active Border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    // Update character selection variable
    character = "Steve";
}

function selectAlex() {
    // Update Active Border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");

    // Update character selection variable
    character = "Alex";
}

function fishOnce() {
    // Test current character
    if (character === "Steve") {
        // Use Steve Probability
        let randNum = Math.random();
        console.log(randNum)
        if (randNum < 0.7){
            console.log("Raw Cod");
        } else if (randNum < 0.9){
            console.log("Raw Salmon");
        } else if (randNum < 0.95) {
            console.log("Tropical Fish")
        } else {
            console.log("Puffer Fish")
        }
    } else {
        // Alex Probability
        alert("Fish with Alex")
    }
}
