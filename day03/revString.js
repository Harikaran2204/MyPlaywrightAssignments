let input = "Harikaran"
let rev = ""

for(let i=input.length-1; i>=0; i--){

    rev += input.charAt(i)
}

console.log("The reversed  string is "+rev)