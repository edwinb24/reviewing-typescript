// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//     name: "Edwin",
//     privileges: ["create-server"],
//     startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: number, b: string): string;
// function add(a: string, b: number): string;
// function add(a: Combinable, b: Combinable) {
//     if (typeof a == "string" || typeof b == "string")
//         return a.toString() + b.toString();
//     return a + b;
// }

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name" + emp.name);
//     if ("privileges" in emp) console.log("Privileges: " + emp.privileges);
//     if ("startDate" in emp) console.log("startDate: " + emp.startDate);
// }

// printEmployeeInformation(e1);

// class Car {
//     driver() {
//         console.log("Driving.....");
//     }
// }
// class Truck {
//     driver() {
//         console.log("Driving.....");
//     }
//     loadCargo(amount: number) {
//         console.log("loading cargo..." + amount);
//     }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.driver();
//     if (vehicle instanceof Truck) vehicle.loadCargo(1000);
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: "bird";
//     flyingSpeed: number;
// }

// interface Horse {
//     type: "horse";
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     const speed =
//         animal.type == "bird" ? animal.flyingSpeed : animal.runningSpeed;
//     console.log("speed" + speed);
// }

// moveAnimal({ type: "horse", runningSpeed: 5 });

// // const userInputElement = <HTMLInputElement>document.getElementById("message-output")!;
// const userInputElement = document.getElementById(
//     "message-output"
// )! as HTMLInputElement;

// userInputElement.value = "Hi, there";

// interface errorContainer {
//     id: string;
//     [prop: string]: string;
// }

// const errorBag: errorContainer = {
//     id: "1234",
//     email: "Not Valid Email",
//     username: "Must start with a capital character",
// };

// const result = add("Edwin ", "Broce");
// result.split(" ");

// const fetchedUserData = {
//     id: "u1",
//     name: "Edwin",
//     job: { title: "CEO", description: "My own company" },
// };

// console.log(fetchedUserData?.job?.title);

// const userInput1 = null;
// const userInput2 = "";

// const storedData1 = userInput1 ?? "DEFAULT";
// const storedData2 = userInput2 ?? "DEFAULT";

// console.log(storedData1);
// console.log(storedData2);
