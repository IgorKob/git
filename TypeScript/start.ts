// 1
let asd: string = 'asd';
let asd2: number | null = 13;
let asd3: boolean | null = true;

// 2
let mytype: 'aaa' | 'sss';
mytype = 'aaa';

// 3
const name: Array<string> = ['qwe', 'asd', 'zxc'];
for (let v of name) {
  console.log(v);    
}

// 4
type objType = {
  name: string,
  address?: string,  //може бути, a може не бути
  tel: any           //будь який тип
  myff: (mess: string) => void
}
const obj: objType = {
  name: 'asd',
  // address: 'dsa',
  tel: 123,
  myff(mess) {console.log(mess)} 
}

// 5
const myff = (a: number, b: number) => {
  return a + b;
}

// 6
type addressType = {
  city?: string | null,
  country: string | null
}
const obj2 = {
  name: null as string | null,
  age: null as number | null,
  isOk: null as boolean | null,
  address: [{
    city: null,
    country: null
  } as addressType],
  address2: [] as Array<addressType>, 
}; 

export type obj2Type = typeof obj2;
const state: obj2Type = {
  name: 'asd',
  age: 13,
  isOk: true,
  address: [{city: 'Lviv', country: 'Ukraine'}],
  address2: [{city: 'Lviv', country: 'Ukraine'}],
}

// 7
const GET_ADD = 'GET_ADD';
type getAddActionType = {
  id: number,
  type: typeof GET_ADD                // свій тип 'GET_ADD'
};
const action : getAddActionType = {
  id: 13,
  type: GET_ADD,
}


////////////////////////////////////

// 1.
type Props = {
  label: string;
  count: number;
  arr: Array<UserType>;
  onIncrement: () => void;
  onIncrement2: (num: number) => void;
};

export const FCCounter: React.FC<Props> = props => {
const { label, count, onIncrement } = props;
return (<></>)


// 2.   class
type Props = {
label: string;
};

type State = {
count: number;
};

export class ClassCounter extends React.Component<Props, State> {
  readonly state: State = {
      count: 0,
  };

  render() {
      return (<></>)
  }