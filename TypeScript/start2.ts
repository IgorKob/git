// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// npm install -g typescript


// any - дозволити що-небудь
// unknown - переконайтесь, що хтось, що використовує цей тип, оголошує, що це за тип
// never - неможливо, щоб цей тип міг статися
// void - функція, яка повертає undefined або не повертає значення

// Iснує два синтаксиси для типів будівель: Інтерфейси та Типи. 
// Вам слід віддати перевагу interface. 
// Використовуйте, type коли вам потрібні певні функції.

// За допомогою TypeScript ви можете створювати складні типи, комбінуючи прості. 
// Існує два популярні способи зробити це: з профспілками та з дженериками.

// профспілками
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


function getLength(obj: string | string[]) {
    return obj.length;
}


// Дженерики
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


// Ви можете оголосити власні типи, які використовують загальні засоби:
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;
const object = backpack.get();






// 
let color: string = "blue";
let decimal: number = 6;
let hex: number = 0xf00d;
let big: bigint = 100n;
let isDone: boolean = false;
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let u: undefined = undefined;
let n: null = null

function error(message: string): never {
    throw new Error(message);
}
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
let strLength: number = (<string>someValue).length;

function warnUser(): void {
    console.log("This is my warning message");
}




//....................................Дженерики
function identity<T>(arg: T): T {
    return arg;
}

//   Перший спосіб - передати всі аргументи, включаючи аргумент типу, функції:
  let output = identity<string>("myString");
  //       ^ = let output: string

//   Другий спосіб також, мабуть, найпоширеніший:
  let output = identity("myString");
  //       ^ = let output: string



// 1
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }
// 2
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}






// Розширення інтерфейсів
interface Shape {
    color: string;
  }
  
  interface PenStroke {
    penWidth: number;
  }
  
  interface Square extends Shape, PenStroke {
    sideLength: number;
  }
  
  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;





//  Розширення класів інтерфейсів
  class Control {
    private state: any;
  }
  
  interface SelectableControl extends Control {
    select(): void;
  }
  
  class Button extends Control implements SelectableControl {
    select() {}
  }




// 
enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let c: Color = Color.Green;







// 
let myIgnoredError = "123";
// @ts-ignore
myStringOrObject = {};







// const
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};




// class
interface User {
    name: string;
    id: number;
}
  
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
  
const user: User = new UserAccount("Murphy", 1);


// class 
class FoodTruck extends Vendor {
    cuisine: string;

    constructor(name: string, cuisine: string) {
        super(name);
        this.cuisine = cuisine;
    }

    greet() {
        return "Hi, welcome to food truck " + this.name + ". We serve " + this.cuisine + " food.";
    }
}
const truck = new FoodTruck("Dave's Doritos", "junk");
console.log(truck.greet());




// function - використовувати інтерфейси для анотації параметрів і повернення значень функціям:
function getAdminUser(): User {
    //...
}
  
function deleteUser(user: User) {
    // ...
}

// 
const add4 = (x: number, y: number): number => {
    return x + y;
};

// 
function wrapInArray<Type>(input: Type): Type[] {
    return [input];
}
const stringArray = wrapInArray("hello generics");
const numberArray = wrapInArray(123);
const stringArray2 = wrapInArray<string>("");  


// 
const incrementIndex = (value?: number) => {
    return value === undefined ? 1 : value;
};
incrementIndex();
incrementIndex(0);
incrementIndex(3);


// 
type NumberCallback = (i: number) => void;
const callbackWithIndex2 = (callback: NumberCallback) => {
  callback(i);
};


// 
const boolOrNumberFunction = (input: boolean | number) => {};

boolOrNumberFunction(true);
boolOrNumberFunction(23);




// 
declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad("hi", 10, "left");



// React 
export interface Props {
    name: string;
    priority?: boolean
  }
  
  const PrintName: React.FC<Props> = (props) => {
    return (
      <div>
        <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
      </div>
    )
  }

