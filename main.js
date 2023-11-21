function SayHello(){
    console.log("My name is Nafta-Uron")
    document.write("My name is Nafta-Uron")
}
SayHello()

//classwork1
function adition(){
    let num = 2
    let num2 = 3
    console.log(num + num2)
}
adition()

function myName(name,age){
    console.log("Hello ",name, "you are ",age, "years old")
}
myName("Nafta",23)
myName("huda",19)
myName("Asad",29)

let num1 = prompt("enter num1")
let num2 = prompt("enter num1")
let num3 = prompt("enter num1")
function numbers(){
    if(num1>num2 && num1>num3){
       console.log(num1)
    }
    else if(num2>num1 && num2>num3){
        console.log(num2)
    }
    else if(num3>num1 && num3>num2){
        console.log(num3)
    }
    else{
        console.log("ma kala weyno")
    }
    
}
numbers()