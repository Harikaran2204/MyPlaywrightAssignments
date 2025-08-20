

function launchBrowser(browserName){

    if(browserName == "Chrome"){

        console.log("Launch the chrome browser")
    }

    else{

        console.log("Don't launch the chrome browser")
    }

}

let browserName = "Chrome";
launchBrowser(browserName)


function runTests(testType){

    switch (testType){

        case "smoke": 
            console.log("Smoke test is triggered") 
            break

        case "sanity": 
            console.log("Sanity test is triggered") 
            break

        case "regression": 
            console.log("Regression test is triggered") 
            break

        default:
            console.log("Smoke test is triggered by default")

    }


}

let testType = "sanity01"
runTests(testType)