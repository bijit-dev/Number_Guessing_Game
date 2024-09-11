// div1
let div1 = document.querySelector("#div1")
let h1 = document.querySelector(".heading1")
let input1 = document.querySelector(".input1")
let btn = document.querySelector(".btn")
let error = document.querySelector(".error")
let reset = document.querySelector(".reset")
// div2
let div2 = document.querySelector("#div2")
let h2 = document.querySelector(".heading2")
let input2 = document.querySelector(".input2")
let btn2 = document.querySelector(".btn2")
let error2 = document.querySelector(".error2")
let reset2 = document.querySelector(".reset2")
let Chance = document.querySelector(".Chance")
let count = 5

// btn
btn.addEventListener("click", function () {
    if (!input1.value) {
        error.innerHTML = "Please Enter Number";
    } else if (isNaN(input1.value)) {
        error.innerHTML ="Please Enter a Number";
    } else if (!(input1.value>=0 && input1.value<100)) {
        error.innerHTML ="Please Enter a Numebr 1 To 99";
    } else {
        div2.style.display = "block"
        div1.style.display = "none"
        Chance.innerHTML =`Chance : ${count}`
        
        
    }
    
})

// btn2
btn2.addEventListener("click", function () {
    if (!input2.value) {
        error2.innerHTML ="Please Enter Number";
    } else if (isNaN(input2.value)) {
        error2.innerHTML ="Please Enter a Number";
    } else if (!(input2.value>=0 && input2.value<100)) {
        error2.innerHTML ="Please Enter a Numebr 1 To 99";
    } else {
        if (count > 1) {
            count--
            Chance.innerHTML =`Chance : ${count}`
            if (input1.value == input2.value) {
                h2.innerHTML = "Player two Winner"
                btn2.style.display ="none"
                reset2.style.display ="none"
            }
        } else {
            count=0
            h2.innerHTML = "Player One Winner"
            Chance.innerHTML =`Chance : ${count}`
            btn2.style.display ="none"
            reset2.style.display ="none"
        }
    }
})

// reset btn
reset.addEventListener("click", function () {
    string = "";
    input1.value = string
})
reset2.addEventListener("click", function () {
    string = "";
    input2.value = string
})