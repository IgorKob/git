const MYTESTADD = 'MYTESTADD';
const MYTESTCHANGE = 'MYTESTCHANGE';
const MYDELETE = 'MYDELETE';

const initialstate = {
  mytestText: '',
  mytestArr: [
    {id: 1, name: 'Admin', text: 'my text loren'},
    {id: 2, name: 'Admin', text: 'my text loren'},
    {id: 3, name: 'Admin', text: 'my text loren'},
  ]
};

const mytestPages_reduce = (state = initialstate, action) => {
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

export const mytestChangeActionCreater = (text) => ({type: MYTESTCHANGE, text: text});
export const mytestaddActionCreater = () => ({type: MYTESTADD});
export const mydeleteActionCreater = (actionId) => ({type: MYDELETE, actionId: actionId});

export default mytestPages_reduce;