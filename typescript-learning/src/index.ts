// Type
let username: string = "Shreyash";

console.log(username);

let age: number = 10
let isAdmin: boolean = true

console.log(age, isAdmin)

let students: string[] = ['abc', 'pqr', 'xyz']
let prices: number[] = [10, 20, 30, 40, 50]

console.log(students, prices)

// functions

// add fun
function add(a: number, b: number): number {
    return a + b
}
console.log(add(5, 2))

// multiply fun
function multiply(a: number, b: number): number {
    return a * b
}
console.log(multiply(2, 4));

// welcomeUser fun
function userName(name: string): string {
    return `welcome ${name}`
}
console.log(userName("shreyash"))