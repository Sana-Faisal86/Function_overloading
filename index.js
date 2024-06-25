// Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. When a function name is overloaded with different jobs it is called Function Overloading.
function add(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && c === undefined) {
        return a + b; // Numeric Addition
    }
    else {
        return `${a}${b}${c}`; // String concatenation
    }
}
// console different overload function:
console.log(add(98, 45));
console.log(add(" Sana ", " Faisal "));
console.log(add(23, " hamza ", true));
console.log(add(" Huzaifa ", " umer ", 56));
export {};
