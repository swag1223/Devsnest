import { createStore } from 'redux';
import getInputsReducer from './reducers/reducer';

//it takes reducer function as parameter
const store = createStore(getInputsReducer);

export default store;