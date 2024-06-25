// Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. When a function name is overloaded with different jobs it is called Function Overloading.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string, c: boolean): string;
function add(a: string, b: string, c: number): string;

function add(a: any, b: any, c?: any): any {
  if (typeof a === "number" && typeof b === "number" && c === undefined) {
    return a + b; // Numeric Addition
  } else {
    return `${a}${b}${c}`; // String concatenation
  }
}
// console different overload function:

console.log(add(98, 45));
console.log(add(" Sana ", " Faisal "));
console.log(add(23, " hamza ", true));
console.log(add(" Huzaifa ", " umer ", 56));
