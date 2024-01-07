const name = document.getElementById("Name")
const frontName = document.getElementById("front-name")
const number = document.getElementById("CardNumber")
const frontNumber = document.getElementById("front-top")
const date = document.getElementById("M")
const frontDate = document.getElementById("front-date")
const date2 = document.getElementById("Y")
const cvc = document.getElementById("CV")
const backCard = document.getElementById("CVC")
const form = document.getElementById("form")
let a = 0;
let n = 0;
let m = 0;
let c = 0;

console.dir(name.nextElementSibling)
console.dir(number)
console.dir(date)


form.addEventListener("submit",e=>{
    e.preventDefault()
    validate()
    if(a>0){
        backCard.textContent = cvc.value.toString(10)
    }
    if(n>0){
        frontName.textContent = name.value
    }
    if(m>0){
        let s = ""
        const b = number.value.toString(10)
        for(let i =0; i<16;i++){
            if((i+1)%4==0){
                s = s + b[i] + String.fromCharCode(32)
            }else{
                s = s + b[i]
            }
        }
        frontNumber.textContent = s
    }
    if(c>0){
        frontDate.textContent = date.value.toString(10)+"/"+date2.value.toString(10)
    }
})

const error = (message,ele) =>{
    const b = ele.nextElementSibling
    ele.style.border = "2px solid var(--Primart-false)"
    b.classList.add("error")
    b.textContent = message
    b.style.fontSize = "12px"
}

const success = (ele) =>{
    ele.style.border = ""
    const b = ele.nextElementSibling
    b.classList.remove("error")
    b.textContent = ""
}

const validate = () =>{
    const nameval = name.value
    const numval = number.value
    const s = number.value.toString(10)
    const s1 = cvc.value.toString(10)
    const dateval = date.value
    const dateval2 = date2.value
    const cvcval = cvc.value

    
    if(numval == ""){
        error("Cant't be blank",number)
        m=0
    }else{
        success(number)
        m++;
    }
    if(nameval == ""){
        error("Cant't be blank",name)
        n=0
    }else{
        success(name)
        n++;
    }
    if(dateval == ""){
        c=0
        error("Cant't be blank",date)
    }else{
        success(date)
        c++;
    }
    if(dateval2 == ""){
        c=0
        error("Cant't be blank",date2)
    }else{
        success(date2)
        c++;
    }
    if(cvcval == ""){
        a=0
        error("Cant't be blank",cvc)
    }else{
        success(cvc)
        a++;
    }
    if((s.length  != 16)){
        console.log(s.length)
        m=0
        error("Enter Correct value",number)
    }else{
        success(number)
        m++;
    }
    if((dateval>12)||(dateval<1)){
        console.log(dateval)
        c=0
        error("Enter Valid Month",date)
    }else{
        success(date)
        c++;
    }
    if(s1.length != 3){
        error("Enter Correct value",cvc)
        a=0
    }else{
        success(cvc)
        a++;
    }
}