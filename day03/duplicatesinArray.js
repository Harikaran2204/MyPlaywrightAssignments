let array = [23,45,65,78,23,90,65]

for(let i=0; i<array.length; i++){

    for(let j=i+1; j<array.length; j++){

        if(array[i]==array[j]){

            console.log(array[i])
        }

    }
}