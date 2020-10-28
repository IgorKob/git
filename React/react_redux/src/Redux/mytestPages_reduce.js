const MYTESTADD = 'MYTESTADD';
const MYTESTCHANGE = 'MYTESTCHANGE';

const initialstate = {
  mytestText: '',
  mytestArr: [
    {id: 1, name: 'Admin', text: 'my text loren'},
    {id: 2, name: 'Admin', text: 'my text loren'},
    {id: 3, name: 'Admin', text: 'my text loren'},
  ]
};

// const mytestPages_reduce = (state = initialstate, action) => {
//
//   switch (action.type) {
//     case MYTESTCHANGE:
//       return {
const mytestPages_reduce = (state = initialstate, action) => {
  // return {
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
      default:
        return state;
  }
}

export const mytestChangeActionCreater = (text) => ({type: MYTESTCHANGE, text: text});
export const mytestaddActionCreater = () => ({type: MYTESTADD});

export default mytestPages_reduce;