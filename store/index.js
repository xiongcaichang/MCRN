import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from 'MCConfig/Navigator'
import screentraker from './middleware/screenTraker'
import * as reducerothers from 'MCReducer'
const navReducer = createNavigationReducer(AppNavigator);

const reducers = combineReducers({
    nav: navReducer,
    ...reducerothers || {}
})

const navmiddleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const middlewares = [thunk, navmiddleware, screentraker];

 if (__DEV__) {
    middlewares.push(logger)
 }

export default store = createStore(reducers, applyMiddleware(...middlewares))
