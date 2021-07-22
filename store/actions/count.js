import {INCREMENT, DECREMENT} from '../../constants/redux';

export const incrementAction = val => ({
  type: INCREMENT,
  payload: val,
});

export const decrementAction = val => ({
  type: DECREMENT,
  payload: val,
});
