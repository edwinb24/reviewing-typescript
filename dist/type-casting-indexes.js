"use strict";
var _a;
const e1 = {
    name: "Edwin",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a == "string" || typeof b == "string")
        return a.toString() + b.toString();
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name" + emp.name);
    if ("privileges" in emp)
        console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp)
        console.log("startDate: " + emp.startDate);
}
printEmployeeInformation(e1);
class Car {
    driver() {
        console.log("Driving.....");
    }
}
class Truck {
    driver() {
        console.log("Driving.....");
    }
    loadCargo(amount) {
        console.log("loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.driver();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    const speed = animal.type == "bird" ? animal.flyingSpeed : animal.runningSpeed;
    console.log("speed" + speed);
}
moveAnimal({ type: "horse", runningSpeed: 5 });
// const userInputElement = <HTMLInputElement>document.getElementById("message-output")!;
const userInputElement = document.getElementById("message-output");
userInputElement.value = "Hi, there";
const errorBag = {
    id: "1234",
    email: "Not Valid Email",
    username: "Must start with a capital character",
};
const result = add("Edwin ", "Broce");
result.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "Edwin",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = null;
const userInput2 = "";
const storedData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "DEFAULT";
const storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : "DEFAULT";
console.log(storedData1);
console.log(storedData2);
//# sourceMappingURL=type-casting-indexes.js.map