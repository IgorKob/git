const MYTESTADD = 'MYTESTADD';
const MYTESTCHANGE = 'MYTESTCHANGE';
const MYDELETE = 'MYDELETE';

type initialstateMytestArrType = {
  id: number, 
  name: string, 
  text: string  
}

const initialstate = {
  mytestText: '' as string | null,
  mytestArr: [
    {id: 1, name: 'Admin', text: 'my text loren'},
    {id: 2, name: 'Admin', text: 'my text loren'},
    {id: 3, name: 'Admin', text: 'my text loren'},
  // ] as Array<initialstateMytestArrType>
  ] as Array<any>
};

export type initialstateType = typeof initialstate;

const mytestPages_reduce = (state = initialstate, action: any): initialstateType => {
    switch (action.type) {
      case MYTESTCHANGE:
        return {
          ...state,
          mytestText: action.text
        }
      case MYTESTADD:
        return {
          ...state,
          mytestText: '',
          mytestArr: [...state.mytestArr, {id: state.mytestArr.length + 1, name: 'Admin', text: state.mytestText}]
        }
      case MYDELETE:
        return {
          ...state,
          mytestArr: [...state.mytestArr.filter(el => {
            if (el.id != action.actionId) return el;
            }
          )]
        }
      default:
        return state;
  }
}

type mytestChangeActionCreaterType ={type: typeof MYTESTCHANGE, text: string};
export const mytestChangeActionCreater = (text: string): mytestChangeActionCreaterType => ({type: MYTESTCHANGE, text: text});
type mytestaddActionCreaterType = {type: typeof MYTESTADD};
export const mytestaddActionCreater = (): mytestaddActionCreaterType => ({type: MYTESTADD});
type mydeleteActionCreaterType = {type: typeof MYDELETE, actionId: number};
export const mydeleteActionCreater = (actionId: number): mydeleteActionCreaterType => ({type: MYDELETE, actionId: actionId});

export default mytestPages_reduce;