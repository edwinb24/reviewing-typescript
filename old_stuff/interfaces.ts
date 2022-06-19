// type AddFn = (a: number, b: number) => number;
// interface AddFn {
//     (a: number, b: number): number;
// }
// interface Named {
//     readonly name: string;
//     output?: string;
// }

// interface Greetable extends Named {
//     greet(phrase: string): void;
// }

// const add = (n1: number, n2: number) => n1 + n2;
// class Person implements Greetable {
//     constructor(public name: string) {}
//     greet(phrase: string) {
//         console.log(phrase + " " + this.name);
//     }
// }
// let user1: Greetable;

// user1 = {
//     name: "Edwin",
//     output: "lalala",
//     greet(phrase: string) {
//         console.log(phrase + " " + this.name);
//     },
// };

// user1.greet("HELLo");
