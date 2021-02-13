// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// https://github.com/typescript-cheatsheets/react
// https://codeguida.com/post/2267
// https://codeguida.com/post/475
// https://fettblog.eu/typescript-react/styles/

// css style
// npm install csstype
// https://www.npmjs.com/package/csstype

// npm install -g typescript


// # npm
// npm i --save-dev @types/react
// npm install --save @types/react-dom
// # yarn
// yarn add --dev @types/react

// npm install --save @types/react-redux

// npm install --save @types/react-router
// npm install --save @types/react-router-dom

// https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state
// npm install --save typesafe-actions

// npm install --save @types/react-router
// npm install --save @types/react-router-dom

// css
// npm install --save-dev css-loader
// scss
// npm install sass-loader sass webpack --save-dev

// npm i css-modules-typescript-loader

// css modules
// npm install typescript-plugin-css-modules --save-dev
// yarn add -D typescript-plugin-css-modules

// npm install @types/styled-components

// npm install --save @types/material-ui

// npm i @redux-saga/types

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



type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  status: "waiting" | "success";
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  obj3: {
    id: string;
    title: string;
  };
  objArr: {
    id: string;
    title: string;
  }[];
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  onSomething: Function;
  onClick: () => void;
  onChange: (id: number) => void;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  optional?: OptionalType;
};

// 
export declare interface AppProps {
  children1: JSX.Element; // bad, doesnt account for arrays
  children2: JSX.Element | JSX.Element[]; // meh, doesn't accept strings
  children3: React.ReactChildren; // despite the name, not at all an appropriate type; it is a utility
  children4: React.ReactChild[]; // better, accepts array children
  children: React.ReactNode; // best, accepts everything (see edge case below)
  functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}



type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

// 
type GreetProps = { age?: number };
const Greet = ({ age = 21 }: GreetProps) => // etc

// 
type GreetProps = {
  age?: number;
};
class Greet extends React.Component<GreetProps> {
  render() {
    const { age = 21 } = this.props;
    /*...*/
  }
}
let el = <Greet age={3} />;


// 
const MyArrayComponent = () => (Array(5).fill(<div />) as any) as JSX.Element;

// 
const [user, setUser] = React.useState<IUser | null>(null);
setUser(newUser);

// 



// styled-components
type FlexProps = {
  direction?: 'row' | 'column',
}
export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction};
`;
// use it like that:
const el = <Flex direction="row"></Flex>





// 1
// Компонент у вигляді function declaration
function Heading(): React.ReactNode {
  return <h1>My Website Heading</h1>
}
// Компоненти у вигляді функціонального виразу 
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>





// 2
interface Props {
  name: string;
  color: string;
}
type OtherProps = {
  name: string;
  color: string;
}
// Зверніть увагу, що ми використовуємо оголошення функції з інтерфейсом Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}
// Зверніть увагу, що тут ми використовуємо функціональний вираз з типом OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>



  // 3
type Props = {
  /** колір для фону */
  color?: string;
  /** стандартний дочірній проп: приймає будь-який валідний вузол React */
  children: React.ReactNode;
  /** колбек, переданий обробнику onClick */
  onClick: () => void;
}
const Button: React.FC<Props> = ({ children, color = 'tomato', onClick }) => {
   return <button style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
}



// 4
type User = {
  email: string;
  id: string;
}
// тобто TypeScript розуміє, що змінна user може бути типу User чи null.
const [user, setUser] = useState<User | null>(null);


// 5
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` типу рядок
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` типу число
      };
    default:
      return state;
  }
}



// 6
import React from 'react'

const MyInput = () => {
  const [value, setValue] = React.useState('')

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return <input value={value} onChange={onChange} id="input-example"/>
}




// 7
import React from 'react';

type ButtonProps = {
    /** фоновий колір кнопки */
    color: string;
    /** текст всередині кнопки */
    text: string;
}

type ContainerProps = ButtonProps & {
    /** висота контейнера (значення використовується в пікселях) */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}



// 77
import React from 'react';

interface ButtonProps {
    /** фоновий колір кнопки */
    color: string;
    /** текст всередині кнопки */
    text: string;
}

interface ContainerProps extends ButtonProps {
    /** висота контейнера (значення використовується в пікселях) */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}





// 8
const ref1 = useRef<HTMLElement>(null!);
// or
const ref2 = useRef<HTMLElement | null>(null);
function TextInputWithFocusButton() {
  const inputEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}



// 
type ListProps<ItemType> = {
  items: ItemType[];
  innerRef?: React.Ref<{ scrollToItem(item: ItemType): void }>;
};

function List<ItemType>(props: ListProps<ItemType>) {
  useImperativeHandle(props.innerRef, () => ({
    scrollToItem() {},
  }));
  return null;
}






// 9
type MyProps = {
  message: string;
};
type MyState = {
  count: number; // like this
};
class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}




// 10
class App extends React.Component<{ message: string }, { count: number }> {
  state = { count: 0 };
  render() {
    return (
      <div onClick={() => this.increment(1)}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
  increment = (amt: number) => {
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}


// 
class App extends React.Component<{message: string;}> {
  pointer: number; // like this
  componentDidMount() {
    this.pointer = 3;
  }
  render() {
    return (
      <div>
        {this.props.message} and {this.pointer}
      </div>
    );
  }
}






// 11
type State = {
  text: string;
};
class App extends React.Component<Props, State> {
  state = {
    text: "",
  };
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  // or
  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({text: e.currentTarget.value})
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}



// 12
<form
  ref={formRef}
  onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
  }}
>
  <div>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
  </div>
  <div>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
  </div>
  <div>
    <input type="submit" value="Log in" />
  </div>
</form>



// 1212
// createRef:
class CssThemeProvider extends React.PureComponent<Props> {
  private rootRef = React.createRef<HTMLDivElement>(); // like this
  render() {
    return <div ref={this.rootRef}>{this.props.children}</div>;
  }
}
// forwardRef:
type Props = { children: React.ReactNode; type: "submit" | "button" };
export type Ref = HTMLButtonElement;
export const FancyButton = React.forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} className="MyClassName" type={props.type}>
    {props.children}
  </button>
));



// 121212
const modalRoot = document.getElementById("modal-root") as HTMLElement;
// assuming in your html file has a div with id 'modal-root';
export class Modal extends React.Component {
  el: HTMLElement = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}



// 13 
import * as React from "react";

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppCtx = React.createContext<AppContextInterface | null>(null);

// Provider in your app

const sampleAppContext: AppContextInterface = {
  name: "Using React Context in a Typescript App",
  author: "thehappybug",
  url: "http://www.example.com",
};

export const App = () => (
  <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>
);

// Consume in your app

export const PostInfo = () => {
  const appContext = React.useContext(AppCtx);
  return (
    <div>
      Name: {appContext.name}, Author: {appContext.author}, Url:{" "}
      {appContext.url}
    </div>
  );
};



// 1313
interface ContextState {
  name: string | null;
}
const Context = React.createContext({} as ContextState);

// 131313
import * as React from "react";
const currentUserContext = React.createContext<string | undefined>(undefined);
function EnthusasticGreeting() {
  const currentUser = React.useContext(currentUserContext);
  return <div>HELLO {currentUser!.toUpperCase()}!</div>;
}
function App() {
  return (
    <currentUserContext.Provider value="Anders">
      <EnthusasticGreeting />
    </currentUserContext.Provider>
  );
}







// 
import React from 'react';

interface ButtonProps { 
    color: string;
    name: string;
}

interface ContainerProps extends ButtonProps {
    height: number;
    width: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, name }) => {
  return <div style={{ backgroundColor: color, height: `${height}px`, width: `${width}px`}}>{name}</div>
}

type Hello = {
    cool: string;
}

type Other = Hello & {
    other: string;
}

const MyThing: React.FC<Other> = ({ other, cool }) => { 
    return <div>{cool}</div>
}












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






  // React.memo
  interface ImStatelessProps {
    foo: string;
    bar: number;
  }
  // Method #1:
  const ImStateless: React.SFC<ImStatelessProps> = (props) => {
    return (
      <div>
        ...
      </div>
    );
  };
  export default React.memo(ImStateless);

  // Method #2:
  const ImStateless = React.memo<ImStatelessProps>((props) => {
    return (
      <div>
        ...
      </div>
    );
  });
  export default ImStateless;




  //  useParams
  interface ParamTypes {
    tokenName: string
  }
  const { tokenName } = useParams<ParamTypes>()






// 
<Input onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event?.key === "Enter") {
        event?.preventDefault();
        onClick();
    }
}} />






// 
type Props2 = { 
  mess?: string,
  severity?: "error" | "success" | "info" | "warning" | undefined,
  children?: React.ReactNode
} 
export const AlertApp: React.FC<Props2> = ({mess}) => { 
  const classes = useStyles();
  return <Alert severity={'error'} >Your {mess} in weather database</Alert>
} 






// Redux
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

type LogInFailureType = {
    type: typeof LOG_IN_FAILURE
    payload: string
}
type SignUpFailureType = {
    type: typeof GET_DATA_FAILURE
    payload: string
}

export const logInFailure = (errorMessage : string) : LogInFailureType => {
  return {
      type: LOG_IN_FAILURE,
      payload: errorMessage
  }
};
export const signUpFailure = (message : string) : SignUpFailureType => {
  return {
      type: GET_DATA_FAILURE,
      payload: message
  }
};

// Thunk
interface SignUpType {
  nameValue: string
  emailValue: string
  passwordValue: string
  confirmPasswordValue: string
  dayOfBirth: string
  monthOfBirth: string
  yearOfBirth: string
}

const signUp = ({nameValue, emailValue, passwordValue, confirmPasswordValue, dayOfBirth, monthOfBirth, yearOfBirth} : SignUpType) => {
  return async (dispatch : any) => {
      try {
          if (passwordValue !== confirmPasswordValue) {
              throw new Error('Password do not match');
          } else if (passwordValue.length < 6) {
              throw new Error('Password must be at least 6 characters');
          } else if (!dayOfBirth || !monthOfBirth || !yearOfBirth) {
              throw new Error('Date of birth is not correct');
          } else {
              await firebase.app().auth().createUserWithEmailAndPassword(emailValue, passwordValue).then(cred => {
                  if (cred.user !== null) {
                      db.collection('users').doc(cred.user.uid).set({
                          userName: nameValue,
                          dateOfBirth: `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
                          liveYears: 90
                      });
                  }
              });
          }
      } catch (err) {
          dispatch(signUpFailure(err.message));
      }
  }
};