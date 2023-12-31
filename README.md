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

## Developer’s log, Stardate 2310.19

### Expressions vs Statements

I got a bit confusing trying to understand the difference between both concepts. A understood an expressions as something that produces a value, for example `40 + 2` is an expressions because it produces the value of `42`. A statement does not produce an value by itself, it's an instruction for the computer to do something `let variable = /* an expression */`. It's like the statements organize the program to produce an expression. 

### The Conditional (Ternary) Operator

I brought this topic here, because it's related to the previous one. Taking switch case aside, we have two ways of dealing with conditions, one of them is the **if statement** the other one is the **conditional (ternary) operator expression**, what does it mean, that the **if statement** does not produce a value, however the  **conditional (ternary) operator expression** does, so it's possible to do something like this:
```js
let x = 1
console.log(`${ x > 1 ? 'x is bigger than 1' : 'x is not bigger than 1'}`) 
```
and the output is going to be `x is not bigger than 1`, while if the do this:
```js
let x = 1
console.log(`${if (x > 1) {'x is bigger than 1'} else {'x is not bigger than 1'}}`)
```
the output is going to be `SyntaxError: Unexpected token 'if'`.

It's specially important in ReactJS, because we can only put expressions inside the curly brackets `{/* expressions goes here */}` in a JSX/React file.

Another interesting use of the **conditional (ternary) operator expression** is that we can store a value inside a variable using it

```js
let number = 11
let isEven = (number % 2) == 0 ? true : false
console.log(isEven)
```
again it's only possible because it's an expression. In other words, we have and statement `let isEven` and to fulfill the slot, we need an expression, in this case `(number % 2) == 0 ? true : false`

## Developer’s log, Stardate 2310.20

### Strict Mode

It's possible to activate strict mode on any JavaScript file just by putting `'use strict'` at the top of the file. It will give more detailed information, like variables that are not defined or special names for variables that may be used in the future development of the language. So it's interesting, when developing using JS, to use this line at the top of any file.

### Functions

To start to talk about functions it's interesting to set the difference between **arguments** and **parameters**. The **parameter** is the placeholder that goes in the function construction while the **argument** is what goes when the fuction is called, like this:
```js
function differenceParameterArgument(parameter) {
    return parameter
}

console.log(differenceParameterArgument('argument'))

```

#### Functions Declarations and Function Expressions

What was done above it's called **Function Declaration**, it's also possible to rewrite this using a function as an expression, let's remember that an expression return a value. It's possible to do it using an **Anonymous Function** as in the example below:

```js
const aFunc = function (parameter) {
    return parameter
}
console.log(aFunc('argument'))
```

The big difference between both is that the function declaration can be called before they are defined in the code, like this:

```js
callingFunction(`I'm the first`)

function callingFunction (parameter) {
    console.log(parameter)
}
```
something that is not possible with the function expression.

## Developer’s log, Stardate 2310.23

#### Arrow Functions

An Arrow Function is just a type of a Function Expressions. So it's possible to store it in a variable, like this:
```js
const evenOrOdd = number => number % 2 == 0 ? 'Even' : 'Odd'
let nr = 7
console.log(`Number ${nr} is ${evenOrOdd(nr)}`)
```
Arrow functions are quite interesting, but, they do not have the `this` keyword.

### Arrays

There are two ways of starting an array, with the literal syntax:
```js
const years = [1997, 1999, 2003, 2005]
```

or with the Array functions
```js
const years = new Array(1997, 1999, 2003, 2005)
```

in both cases, just numbers were stored inside the array, but it's possible to store any type of data, including arrays.

To get some element inside the array, we just use the array with the square brackets to get the element, it starts counting from 0. So the first element is going to be `years[0]`. To get the last element we can use `years[years.length-1]` with the `length` property it's possible to see how many elements there are inside the array, but it starts counting from one, so to get the last one we use `length - 1` because the array starts from 0.

Something interesting, about non primitive values, like an array, is that we can assign it as a constant and yet change it's value
```js
const names = ['James', 'Arthur', 'Bryan']
console.log(names)
names[1] = 'Ben'
console.log(names)
```
the first `console.log` is going to output: `[ 'James', 'Arthur', 'Bryan' ]`, whilst the second one `[ 'James', 'Ben', 'Bryan' ]`. Again only primitive types (Number, String, Booleans, Symbol, BigInt) are immutable, I didn't list null and undefined, for obvious reason. We cannot change the whole array, though.

#### Array Methods

Let's deal with some common Array methods, lets start with the previous one.
```js
const names = ['James', 'Arthur', 'Bryan']
console.log(names)
names.push('Ben')
console.log(names)
names.unshift('Will')
console.log(names)
```
We have the original Array: `[ 'James', 'Arthur', 'Bryan' ]` the `push()` method adds an element at the end of the array `[ 'James', 'Arthur', 'Bryan', 'Ben' ]`, and the `unshift()` adds an element at the beginning of it `[ 'Will', 'James', 'Arthur', 'Bryan', 'Ben' ]`
```js
const names = [ 'Will', 'James', 'Arthur', 'Bryan', 'Ben' ]
const deleted = names.pop()
console.log(names)
console.log(deleted)
names.shift()
console.log(names)
```
We have the original Array: `[ 'Will', 'James', 'Arthur', 'Bryan', 'Ben' ]` the `pop()` method deletes the last element of the array `[ 'Will', 'James', 'Arthur', 'Bryan' ]`, we stored it inside the deleted constant `'Ben'`, and the `shift()` method deletes the first element `[ 'James', 'Arthur', 'Bryan' ]`.

We can use the `includes()` method to check if an element is inside the Array. 
```js
const names = [ 'Will', 'James', 'Arthur', 'Bryan', 'Ben' ]
console.log(names.includes('Ben'))
names.pop()
console.log(names.includes('Ben'))
```
The first output is going to be `true` whilst the second will be `false`.

### Objects

In Arrays we can only reach each elements referring to its position inside the array:
```js
const names = [ 'Will', 'James', 'Arthur', 'Bryan', 'Ben' ]
console.log(names[0]) // 'Will'
console.log(names[3]) // 'Bryan'
```
It's fine, if the Array isn't too long, and it has the same type of data. If it's too long, or it has different types of data inside it, it can get pretty messy. So it's better to use Objects. With this data type we can name each element to easily refer to them in the future.
```js
const currentYear = new Date().getFullYear()
const birthDate = 1994
const willData = {
    name: 'Will',
    age: currentYear - birthDate,
    bloodType: 'A+',
    parents: ['Mary', 'John']
}
```
So with the code above we created an Object with 4 keys, or 4 properties: name, age, bloodType and parents. We can access the information through one of those keys. 

There are two ways of accessing these keys, through Dot Operation or Bracket Notation
```js
const currentYear = new Date().getFullYear()
const birthDate = 1994
const willData = {
    name: 'Will',
    age: currentYear - birthDate,
    bloodType: 'A+',
    parents: ['Mary', 'John']
}
console.log(willData.parents)
console.log(willData['parents'])
```
The difference is that we can put any kind of **expression** inside the Bracket Notation

#### Objects Methods

Now let's take one property of the Object and assign an Function to it, in this case, it's called a Method

```js
const currentYear = new Date().getFullYear()
const willData = {
    name: 'Will',
    bloodType: 'A+',
    parents: ['Mary', 'John'],
    isGraduated: false,
    friends: [ 'James', 'Arthur', 'Bryan', 'Ben' ],
    age: (birthDate) => currentYear - birthDate,
}
console.log(willData.age(1994))
console.log(willData['age'](1994))
```
now the output of the` console.log` is going to be the current year of the system minus the argument passed within the Method. It's possible to used both ways: Dot Operation or Bracket Notation.

## Developer’s log, Stardate 2310.24

### Loops

The point that I want to highlight about loops is the ****continue**** and ****break**** statements. they add an extra layer of control. The **continue** statement terminates the execution of the loop in the current interaction, in contrast to the **break** statement that terminates the loop itself. 
