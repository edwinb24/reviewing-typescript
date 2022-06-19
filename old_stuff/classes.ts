// abstract class Department {
//     protected employees: string[] = [];

//     constructor(protected readonly id: string, public name: string) {}
//     static fiscalYear = 2022;
//     static createEmployee(name: string) {
//         return { name };
//     }

//     abstract describe(this: Department): void;

//     addEmployee(employee: string) {
//         // this.id = "aa"
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees);
//         console.log(this.employees.length);
//     }
// }

// class ITDepartment extends Department {
//     public admins: string[];
//     constructor(id: string, admins: string[]) {
//         super(id, "IT");
//         this.admins = admins;
//     }

//     describe() {
//         console.log("IT DEPARTMENT " + this.id);
//     }
// }

// const employee1 = Department.createEmployee("NAssssss");

// const it = new ITDepartment("12345", ["Accounting"]);
// // console.log(accounting);
// it.describe();
// it.addEmployee("MAXX");
// it.addEmployee("MARTA");
// // accounting.employees; - Show eeror since employees is private
// it.name = "HEWloooowww";
// it.printEmployeeInformation();

// console.log(it);
// // const accountingCopy = { describe: accounting.describe };
// // accountingCopy.describe();

// class AccountingDepartment extends Department {
//     private lastReport: string;
//     private static instance: AccountingDepartment;

//     get mostRecentReport() {
//         if (this.lastReport) return this.lastReport;
//         throw new Error("No report found");
//     }

//     set mostRecentReport(value: string) {
//         if (value) this.addReport(value);
//         else throw new Error("please add a value");
//     }

//     describe() {
//         console.log(`Accounting department ID - ${this.id}`);
//     }

//     private constructor(id: string, private reports: string[]) {
//         super(id, "Accounting");
//         this.lastReport = reports[0];
//     }

//     static getInstance() {
//         if (this.instance) return this.instance;
//         this.instance = new AccountingDepartment("d2", []);
//         return this.instance;
//     }

//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }
//     printReport() {
//         console.log(this.reports);
//     }
//     addEmployee(employee: string) {
//         if (employee === "Max") return;
//         this.employees.push(employee);
//         console.log;
//     }
// }

// // const accounting = new AccountingDepartment("d2", []);
// const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting);
// console.log(accounting2);

// accounting.mostRecentReport = "aaaaaa";
// accounting.addReport("HEEEEEEE");
// console.log(accounting.mostRecentReport);
// accounting.printReport();
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printEmployeeInformation();
// console.log("----------------------");
// accounting.describe();
// it.describe();
