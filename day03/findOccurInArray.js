function findOccInArr(nums,k){

    let count=0

    for(let i=0; i<nums.length; i++){

        if(nums[i] === k){

            count++

        }
    }

    console.log("The repeating "+k+" in the array "+nums+" is "+count)
}

findOccInArr([2,4,5,2,1,2],2)