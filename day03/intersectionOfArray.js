function intersectionOfArray(arr1, arr2){

    let output = []

    for(let i=0; i<arr1.length; i++){

        for(let j=0; j<arr2.length; j++){

            if(arr1[i] === arr2[j]){

                output.push(arr1[i])

            }

        }

    }

    console.log(output)

}

intersectionOfArray([1, 2, 3, 4, 5], [2, 7, 4, 5, 6])