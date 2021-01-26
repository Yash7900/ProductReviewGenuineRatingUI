import React from 'react';
 import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
 import ReduxThunk from 'redux-thunk';
 import { createStore, applyMiddleware } from 'redux';
//  import { createStore} from 'redux';
 import rootReducer from './redux/reducers/index';
// import employeeReducer from './redux/reducers/employeeReducer';
import App from './App';
 
 // To use bootstrap css
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 // redux-thunk lets the action creators invert control by dispatching functions. 
 //They would receive dispatch as an argument and may call it asynchronously. 
 //Such functions are called thunks. 
//  To apply middleware to the store
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
 
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>, 
 
    document.getElementById('root')
 );