/*
 Create a program that will get the users' state (2 letters, capitalized eg. NE) and current outside temperature (F).
 Then it will give them a personalized recommendation about clothing they should wear.
 These messages are stored in an array. Each message is an item in the array.
*/


// Create prompts to collect variable information for name, state, and temperature
let myName = prompt("What is your name?")
let myState = prompt("What state do you live in? Two letters, capitalized.")
let theTemp = prompt("What temperature is it outside in degrees Farenheit?")


// Create message array with four different message displays based on the state and temperature

let output1 = "wear a warm coat, hat, scarf and gloves"

let output2 = "wear a warm coat but you won't need a hat, scarf or gloves"

let output3 = "wear your warmest coat, a warm hat, a scarf, and warm gloves"

let output4 = "wear a warm coat, hat and gloves. Maybe a scarf too"

let messages = [output1, output2, output3, output4]


// Create ifElse statement

if (theTemp < 32 && myState == 'NE') {
    console.log(`${myName}, ${messages[0]}`)
    // when the temp is less than 32 in NE
        
} else if ((theTemp > 32 && theTemp < 50) && myState == 'NE') {
    console.log(`${myName}, ${messages[1]}`)
    // when the temp is between 32 and 50 in NE
        
} else if ((theTemp > 32 && theTemp < 50) && myState == 'FL') {
    console.log(`${myName}, ${messages[2]}`)
    // when the temp is between 32 and 50 in FL
    
} else if ((theTemp > 50 && theTemp < 70) && myState == 'FL') {
     console.log(`${myName}, ${messages[3]}`)
     // when the temp is between 50 and 70 in FL
}    
