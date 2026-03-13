import {compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";  

import { rootReducer } from "./root-reducer";

// const loggerMiddleware = store => next => action => {
//     if(!action.type) {
//         return next(action);
//     }

//     console.log('Dispatching:', action);
//     console.log('Payload', action.payload);
//     console.log('Current state:', store.getState());
//     const result = next(action);
//     console.log('Next state:', store.getState());
//     return result;
// }

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);   
