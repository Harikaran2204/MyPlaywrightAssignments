let input = "HariKaran"
let count = 0

for(let i=0; i<input.length; i++){

    if(input.charAt(i) == 'a'){

        count++
    }
}

console.log("The number of repeating a in input is "+count)