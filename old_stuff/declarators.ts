// // const names: Array<string> = ["Edwin", "Callie"];
// // names[0].split(" ");
// // const promise = new Promise<string>((resolve, reject) => {
// //     setTimeout(() => resolve("This is done!"), 2000);
// // });

// // promise.then((data) => {
// //     data.split(" ");
// // });

// const merge = <T extends object, U extends object>(objA: T, objB: U) =>
//     Object.assign(objA, objB);

// console.log(merge({ name: "Max" }, { age: 30 }));

// const mergedObj = merge({ name: "Max" }, { age: 30 });

// console.log(mergedObj.name);

// interface Lengthy {
//     length: number;
// }

// const countAndDescribe = <T extends Lengthy>(element: T) => {
//     let descriptionText = "Got no value.";
//     if (element.length === 1) descriptionText = "Got 1";
//     else if (element.length > 1) descriptionText = "Got more than 1";
//     return descriptionText;
// };

// const extractAbdDescribe = <T extends object, U extends keyof T>(
//     obj: T,
//     key: U
// ) => {
//     return "Value" + obj[key];
// };

// class DataStorage<T> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }
//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }
//     getItems() {
//         return [...this.data];
//     }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem("Max");
// textStorage.addItem("Callie");
// textStorage.addItem("Edwin");
// textStorage.removeItem("Edwin");
// console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Callie" });
// objStorage.removeItem({ name: "Callie" });
// console.log(objStorage.getItems());

// interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntil: Date;
// }

// const createCourseGoal = ({
//     title,
//     description,
//     completeUntil,
// }: CourseGoal): CourseGoal => {
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntil = completeUntil;
//     return courseGoal as CourseGoal;
// };
