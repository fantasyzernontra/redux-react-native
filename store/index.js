import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {createStore, combineReducers} from 'redux';

import countReducer from './reducers/countReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  count: persistReducer(persistConfig, countReducer),
});

const configureStore = () => {
  return createStore(rootReducer);
};

export const store = configureStore();
export const persistor = persistStore(store);
