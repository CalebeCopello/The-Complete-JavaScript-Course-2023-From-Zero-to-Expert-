/*
CHALLENGE #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
*/
let markWeight = 78
let markHeight = 1.69
let johnWeight = 92
let johnHeight = 1.95

let markBMI = (markWeight / markHeight ** 2)
let johnBMI = (johnWeight / johnHeight ** 2)

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`)
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mike's (${markBMI.toFixed(2)})!`)
}