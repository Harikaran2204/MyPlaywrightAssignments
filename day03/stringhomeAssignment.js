function stringAssignment1(input1){

    let splitWords1 = input1.split(' ')
    console.log("The last word is: "+splitWords1[splitWords1.length-1])
    console.log("The length of last word is: "+splitWords1[splitWords1.length-1].length)
}

stringAssignment1("Hello World")

function stringAssignment2(input2){

    let splitWords2 = input2.trim().split(' ')
    console.log("The last word is: "+splitWords2[splitWords2.length-1])
    console.log("The length of last word is: "+splitWords2[splitWords2.length-1].length)
}

stringAssignment2(" fly me to the moon ")

function stringAssignment3(word1,word2){

    let count = 0
    let sortedword1 = word1.toLowerCase().split("").sort()
    let sortedword2 = word2.toLowerCase().split("").sort()

    if(sortedword1.length === sortedword2.length){

        for(let i=0; i<sortedword1.length; i++){

            if(sortedword1[i] === sortedword2[i]){

                count++
            }
        }
    }

    if(count === sortedword1.length){

        console.log("The given string is a anagram")
    }

    else{

        console.log("The given string is not a anagram")

    }
}

stringAssignment3("Listen","Silent")