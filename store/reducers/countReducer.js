import {INCREMENT, DECREMENT} from '../../constants/redux';

// Initial state of Redux state
const initialState = {
  counter: 0,
  text: 'Hi There!',
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        text: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
