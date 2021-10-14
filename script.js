// Minecraft Fishing Simulator

// variables to store html elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");
let villagerImgEl = document.getElementById("villager-img");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;


// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
villagerImgEl.addEventListener("click", selectVillager);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);


// Event Functions
function selectSteve() {
    // Update Active Border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active")
    // Update character selection variable
    character = "Steve";
}

function selectAlex() {
    // Update Active Border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");
    villagerImgEl.classList.remove("active")

    // Update character selection variable
    character = "Alex";
}

function selectVillager() {
    // Update Active Border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.add("active")

    // Update character selection variable
    character = "Villager"
}

function fishOnce() {
    // Test current character
    if (character === "Steve") {
        // Use Steve Probability
        let randNum = Math.random();
        console.log(randNum)
        if (randNum < 0.7) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png"
            numCodEl.innerHTML = numCod
            console.log("Raw Cod");
        } else if (randNum < 0.9) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png"
            numSalmonEl.innerHTML = numSalmon
            console.log("Raw Salmon");
        } else if (randNum < 0.95) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png"
            numTropicalEl.innerHTML = numTropical
            console.log("Tropical Fish")
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png"
            numPufferEl.innerHTML = numPuffer
            console.log("Puffer Fish")
        }
    } if (character === "Alex") {
        // Alex Probability
        let randNum = Math.random();
        console.log(randNum)
        if (randNum < 0.1) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png"
            numCodEl.innerHTML = numCod
            console.log("Raw Cod");
        } else if (randNum < 0.2) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png"
            numSalmonEl.innerHTML = numSalmon
            console.log("Raw Salmon");
        } else if (randNum < 0.5) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png"
            numTropicalEl.innerHTML = numTropical
            console.log("Tropical Fish")
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png"
            numPufferEl.innerHTML = numPuffer
            console.log("Puffer Fish")
        }
    } if (character === "Villager") {
        // Villager probability
        let randNum = Math.random();
        console.log(randNum)
        if (randNum < .25) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png"
            numCodEl.innerHTML = numCod
            console.log("Raw Cod");
        } else if (randNum < 0.5) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png"
            numSalmonEl.innerHTML = numSalmon
            console.log("Raw Salmon");
        } else if (randNum < 0.75) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png"
            numTropicalEl.innerHTML = numTropical
            console.log("Tropical Fish")
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png"
            numPufferEl.innerHTML = numPuffer
            console.log("Puffer Fish")
        }
    }
}

function plus5() {
    for (let n = 1; n <= 5; n++) {
        fishOnce();
    }
}

function until200() {
    let codTarget = numCod + 200;
    let count = 0;
    while (numCod < codTarget) {
        fishOnce();
        count++;
    }
    console.log(count);
}