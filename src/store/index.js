// redux
import {createStore, combineReducers} from 'redux';
// reducers
import {counterReducer as counter} from './reducers/counterReducer'
import {shopReducer as shop} from './reducers/shopReducer'
//combine reducers
const rootReducer = combineReducers({counter, shop})
// init store
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store