console.log("Hello from src/index.js!");

// const list = document.querySelector("#players"); // CSS id selector

const list = document.getElementById("players")

console.log(list.innerHTML)

list.insertAdjacentHTML("beforeend", "<li>France</li>");
console.log(list.innerHTML)

list.insertAdjacentHTML("beforeend", "<li>Sweden</li>");
console.log(list.innerHTML)
debugger
const winner = document.querySelector(".winner")
console.log(winner.innerText)

// winner.style.color = "green"
winner.style.fontWeight = "bold"

// const liItems = document.querySelectorAll("li")
// console.log(liItems.first)
winner.innerText = "England - Football's coming home!"

list.insertAdjacentHTML("afterbegin", "<li>Portugal (2 Wins)</li>");

winner.style.display = "none"
winner.style.display = ""


// winner.classList.remove("winner")

const input = document.querySelector("input")
console.log(input.value)

input.value = "nina@gmail.com"

console.log(input.value)


const btn = document.querySelector("a")
console.log(btn.innerHTML)
console.log(btn.href)

const colorBtn = document.querySelector("#color-btn")

colorBtn.addEventListener("click", (event) => {
  // event.preventDefault()
  console.log(event.currentTarget)
  winner.classList.toggle("text-red")
  // Do something (callback)
});