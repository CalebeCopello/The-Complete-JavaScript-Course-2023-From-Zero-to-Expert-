let markWeight = 78
let markHeight = 1.69
let johnWeight = 92
let johnHeight = 1.95

let markBMI = (markWeight / markHeight ** 2)
let johnBMI = (johnWeight / johnHeight ** 2)

let markHigherBMI = markBMI > johnBMI // set the variable with the result of operators

// markBMI > johnBMI ? markHigherBMI = true : markHigherBMI = false

console.log(markBMI, johnBMI, markHigherBMI)