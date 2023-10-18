# The Complete JavaScript Course 2023 From Zero to Expert!
 My code repository for this course.
 I will also write what I understood from different lessons.

## Developer’s log, Stardate 2310.16
### What is JavaScript

JavaScript can be defined as a high-level, object-oriented, multi-paradigm programming language. OK... Fine, but what does it mean? Well, a programming language is a tool to construct some kind of layer between the hardware and the user, in other words, it's a set of instructions to make the computer do things. Taking this into account, we can also think about the high-level characteristic, it means that the language is closer to the user than to the hardware, differently from C for example, in JavaScript it's no need to manage memory. JavaScript is also an object-oriented language, instead of old paradigms like C that was an event oriented language. And it's multi-paradigm because it accepts many styles to structure the code.

## Developer’s log, Stardate 2310.17
### Data Types

There are two types of values in JavaScript, objects and primitives, and a value is a primitive when it's not an object. There are 7 primitive data types: number `let jsValue = 7`, string, `let jsValue = 'JavaScript'`, boolean `let jsValue = true`, undefined `let jsValue`, null `let jsValue = ''`, symbol and bigInt.
* Number: are floating point number, so they can be decimals and integers. In `let jsValue = 7`, it's also considered 7.0.
* String: a sequence of characters, so different from C that only has a character data type, JavaScript uses String.
* Boolean: is a logical type, and are set for true or false.
* Undefined: as exemplified above, the undefined type is the value is not defined for the variable.
* Null: it's similar to Undefined, but it's empty.
* Symbol: it's a value that is unique and cannot be changed (not used), probably because we can use constants if it's the case.
* BigInt: it's used to larger integers that the Number type can hold.

#### Dynamic typing
Differently from C or Java (or TypeScript), we do not need to define the type of the variable when we want to store a value in it. So in JavaScript the variable does not have a type, only it's value. It has its advantages and also its drawbacks. We don't need to worry about selecting types for variables, but it's more difficult to find a but if it comes from a value in a variable.
