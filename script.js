let body = document.querySelector("body")
let container = document.querySelector("#container")
let enter = document.querySelector("#go")
let restart = document.querySelector("#restart")

document.addEventListener("contextmenu", e => {
  e.preventDefault()
})

  let inputArr = []

 for (let rowCount = 0; rowCount < 6; rowCount++) {
  let row = []
   inputArr.push(row)
   for (let column = 0; column < 5; column++) {
     
     let space = document.createElement("input")
     space.classList.add("square")
     container.appendChild(space)
     row.push(space)
     
   
   }
 }

function wordle() {

  let wordSet = ["panic", "dupes", "crate", "great","soare","avoid","knobs","venom","glory","grate","admit","brisk","soggy","usurp","scald","scorn","leave","twine","sting",]

  let correct = [[], [], [], [], [], []]
  let yellow = [[], [], [], [], [], []]
  let enteredLetters = []


  
  let num = Math.floor(Math.random()*wordSet.length)
  let word = wordSet[num]
  console.log(word)

let enterClicks = -1

enter.addEventListener("click", () => {

  enterClicks++

  for (let y = 0; y < 5; y++) {
    inputArr[enterClicks][y].disabled = true
  }

  for (let rowVal = enterClicks; rowVal < 6; rowVal++) {
    for (let col = 0; col<5; col++) {

      let square = inputArr[rowVal][col] 
      let current = square.value

      

      if (current == word[col]) {
        square.style.backgroundColor = "green"
        correct[rowVal].push(current)
      }

      


      if (current !== word[col] && word.indexOf(current) !== -1) {
        square.style.backgroundColor = "yellow"
      }

       if (current !== word[col] && word.indexOf(current) == -1) {
        square.style.backgroundColor = "darkgray"
      }

      if (current == "") {
        square.disabled = false
        square.style.backgroundColor = "white"
        if (square.disabled == true) {
          enteredLetters.push(current)
        }
       
      }

    

     
    }
  }
  let insults = ["You wanker!","Oh my, were you stood up again by the 7 dwarfs and Snow White?","I envy everyone you have never met","You’re like the end pieces of a loaf of bread","Honestly, are you even using your brain?","You’re doing great… for a lumpy potato","You’re as useless as the ‘ueue’ in ‘queue","Zombies eat brains… you’re safe"]
  for (let x = 0; x < 6; x++) {
   let correctString = correct[x].toString().replace(/,/g, "")
     if (correctString == word) {
       window.alert("By Jove, you've done it! You've found the cure.")
       break;
     }else if(correctString == word){
       window.alert(insults[getRandomInt(insults.length)])
       break;
     }
     
  }
  
})
}

wordle()

restart.onclick = () => {
  location.reload()
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}