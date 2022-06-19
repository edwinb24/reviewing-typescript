"use strict";
// const names: Array<string> = ["Edwin", "Callie"];
// names[0].split(" ");
// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => resolve("This is done!"), 2000);
// });
// promise.then((data) => {
//     data.split(" ");
// });
const merge = (objA, objB) => Object.assign(objA, objB);
console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.name);
const countAndDescribe = (element) => {
    let descriptionText = "Got no value.";
    if (element.length === 1)
        descriptionText = "Got 1";
    else if (element.length > 1)
        descriptionText = "Got more than 1";
    return descriptionText;
};
const extractAbdDescribe = (obj, key) => {
    return "Value" + obj[key];
};
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Callie");
textStorage.addItem("Edwin");
textStorage.removeItem("Edwin");
console.log(textStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Callie" });
objStorage.removeItem({ name: "Callie" });
console.log(objStorage.getItems());
const createCourseGoal = ({ title, description, completeUntil, }) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
};
//# sourceMappingURL=declarators.js.map