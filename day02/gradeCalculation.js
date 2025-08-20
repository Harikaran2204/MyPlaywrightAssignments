function gradeCalculation(studentScore){

    switch (true){

        case (studentScore>=90 && studentScore<=100):
            console.log("A Grade")
            break

        case (studentScore>=70 && studentScore<=89):
            console.log("B Grade")
            break

        case (studentScore>=35 && studentScore<=69):
            console.log("C Grade")
            break

        default:
            console.log("FAIL")
    }

}

let studentScore = 30
gradeCalculation(studentScore)