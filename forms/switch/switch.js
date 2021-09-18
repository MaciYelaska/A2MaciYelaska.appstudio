/*
 Create a program that will get the users' state (2 letters, capitalized eg. NE) and current outside temperature (F).
 Then it will give them a personalized recommendation about clothing they should wear.
 These messages are stored in an array. Each message is an item in the array.
*/


// Create prompts to collect variable information
let switchName = prompt("What is your name?")
let switchState = prompt("What state do you live in? Two letters, capitalized.")
let switchTemp = prompt("What temperature is it outside in degrees Farenheit?")

// Create message array with four different message displays based on the state and temperature

let switchOutput1 = "wear a warm coat, hat, scarf and gloves"

let switchOutput2 = "wear a warm coat but you won't need a hat, scarf or gloves"

let switchOutput3 = "wear your warmest coat, a warm hat, a scarf, and warm gloves"

let switchOutput4 = "wear a warm coat, hat and gloves. Maybe a scarf too"

let switchMessages = [switchOutput1, switchOutput2, switchOutput3, switchOutput4]

// Create switch code that displays correct message based on user inputs for state and temp

switch(true) {
    case switchTemp < 32 && switchState == 'NE' :
        console.log(`${switchName}, ${switchMessages[0]}`);
        break;
        // for when the temperature is less than 32 in NE
            
    case (switchTemp > 32 && switchTemp < 50) && switchState == 'NE' :
        console.log(`${switchName}, ${switchMessages[1]}`);
        break;
        // for when the temp is between 32 and 50 in NE

    case (switchTemp > 32 && switchTemp < 50) && switchState == 'FL' :
        console.log(`${switchName}, ${switchMessages[2]}`);
        break;
        // for when the temp is between 32 and 50 in FL
        
    case (switchTemp > 50 && switchTemp < 70) && switchState == 'FL' :
        console.log(`${switchName}, ${switchMessages[3]}`);
        break;
        // for when the temp is between 50 and 70 in FL
        
    default:
        console.log(`${switchName}, we have no advice for you.`)
        // default statement for when the temp/state fall outside the set cases
}