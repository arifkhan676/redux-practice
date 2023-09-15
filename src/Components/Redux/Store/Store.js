import { legacy_createStore as createStore } from 'redux'
import CartReducer from '../Reducer/CartReducer';

export const store = createStore(CartReducer)