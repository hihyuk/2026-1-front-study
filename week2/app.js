const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resButton = document.getElementById("reset");
const largeIncButton = document.getElementById("largeIncrease");
const largeDecButton = document.getElementById("largeDecrease");

let count = 0;
number.textContent = count;

function increaseCount() {
    count++;
    number.textContent = count;
}

function decreaseCount() {
    count--;
    number.textContent = count;
}

function resetCount() {
    count = 0;
    number.textContent = count;
}

function largeIncreaseCount() {
    count += 10;
    number.textContent = count;
}

function largeDecreaseCount() {
    count -= 10;
    number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
resButton.addEventListener("click", resetCount);
largeIncButton.addEventListener("click", largeIncreaseCount);
largeDecButton.addEventListener("click", largeDecreaseCount);