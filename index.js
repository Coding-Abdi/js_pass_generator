
btnHero = document.getElementById("btn-hero");

btnOne = document.getElementById("btn-one");
btnTwo = document.getElementById("btn-two");

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let randomCharOne = Math.floor(Math.random() * characters.length)

// let randomCharTwo = Math.floor(Math.random() * characters.length)

// console.log(randomCharOne)
// console.log(randomCharTwo)
// console.log(characters)



function btnClick() {
let newWordOne = ""

for (let i=0; i<15; i++) {
    let randomCharOne = Math.floor(Math.random() * characters.length)
    newWordOne += characters[randomCharOne]
}
btnOne.textContent = newWordOne

let newWordTwo = ""

for (let i=0; i<15; i++) {
    let randomCharTwo = Math.floor(Math.random() * characters.length)
    newWordTwo += characters[randomCharTwo]
}
btnTwo.textContent = newWordTwo

}