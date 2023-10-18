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

### Let, Const, Var

There are three ways to declare a variable in JavaScript: Let, Const, Var. We use Let to declare variable that are going to change or are going to be reassigned.
```js
let code = 'fun'
code = 'really fun'

let undefinedVar
undefinedVar = 'now it\'s defined' 
```
We are going to use Const to declare immutable variables, we are going to declare it and only read it throught the code
```js
const PI = 3.14
console.log(PI)
```
if we try to reassign  we are going to get an error `Assignment to constant variable.

We can, but shouldn't, use Var to declare variables. It's used for legacy reasons. Although Let and Var seem similar, there are differences, for example, Let is block scoped and Var is function scoped.

In JavaScript we can used the three of them to create a variable, ou any of them. It's possible to create a var like this:
```js
javaScript = 'crazy'
console.log(javaScript)
```
no errors will occur, this variable will create a property in Global scope, that can be problematic later.

## Developer’s log, Stardate 2310.18
### Type Conversion and Type Coercion

Type conversion is when the developer manually changes from one type to another, type coercion is when JavaScript does automatically. Type conversion is necessary when we need to change the value type of a variable, for example, when a user gives an input that should be a Number, but it's type is a String, a problem will occur because we will not be able to make calculations with it.
```js
let year = '1997'
let nextDecade = year + 10
console.log(nextDecade) 
```
in the example above, the result in the console will be `199710` instead of `2007` because we are not adding two Number types, we are concatenating a String and a Number. To transform the String to a Number we use the Number function.
```js
let year = '1997'
let nextDecade = Number(year) + 10
console.log(nextDecade) 
```
Now te result will be `2007` as expected, although we didn't change the type of the variable year. We can use the function String(), to convert a type to String. Boolean() is used to convert a type to Boolean. Symbol() and BigInt() will convert the type to Symbol and BigInt respectively.

Type Coercion, as explained above, happens when JavaScript changes the type of value automatically, here we have an example
```js
console.log('20' - '5' - 3)
```
the result will be `12` because JavaScript changed the type of `'20'` and `'5'` to Number so it could proceed with the minus operator. Although if the use this code
```js
console.log('20' + '5' - 3)
```
the result will not be `23` it is going to be `202` because JavaScript will first concatenate the two String `'20'` and `'5'` resulting in a String `'205'` and then proceed with the minus operation, to do so, it will coerce `'205'` to a Number and doing the math.

It is complicated for most developers, because the language does this behind the scenes, so it may be interesting for the developer to convert the type of the variable before do some operation with it.

Let's go back again to the Boolean() function, there are 5 falsy values: `0` `''`, in this case, an empty string, `undefined` `null` `NaN`.

Let's now talk about the Equality Operators, both `==` and `===`, the triple equal sign will compare not only de value but also its type, so `18 === '18'` will return `false` while the double equal sign will only compare the value and do some coercion behind the scene, so `18 == '18'` will return `true`. We also call `==` loose equality operator and `===` the strict equality operator.