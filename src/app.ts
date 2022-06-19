const Logger = (logString: string) => {
    return (constructor: Function) => {
        console.log(logString);
        console.log(constructor);
    };
};

const WithTemplate =
    (template: string, hookId: string) => (constructor: any) => {
        console.log("Rendering WITHTEMPLATE");

        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    };

@Logger("Logging - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Edwin";
    constructor() {
        console.log("Creating Person");
    }
}

const pers = new Person();
console.log(pers);

// -------------------------------------------------

const Log = (target: any, propertyName: string | Symbol) => {
    console.log("Property Decor!");
    console.log(target, propertyName);
};
class Product {
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    set price(value: number) {
        if (value > 0) this._price = value;
        else throw new Error("PRICE SHOULD BE POSITIVE");
    }

    getPriceWithTax(tax: number) {}
}
