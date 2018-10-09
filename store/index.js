import { createStore, applyMiddleware, combineReducers} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from 'MCConfig/Navigator'
import screentraker from './middleware/screenTraker'
import * as reducerothers from 'MCReducer'
import { autoCacheModule_prd } from 'MCConfig/app.json';
const navReducer = createNavigationReducer(AppNavigator);

const reducers = combineReducers({
    nav: navReducer,
    ...reducerothers || {}
})

const devoptions = {};
if (!__DEV__) {
    devoptions = {
        whitelist: autoCacheModule_prd,
    };
}
const persistConfig = {
    key: 'rootpersistKey',
    storage,
    timeout: 3000,
    ...devoptions
}

const persistedReducer = persistReducer(persistConfig, reducers)
const navmiddleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const middlewares = [thunk, navmiddleware, screentraker];
 if (__DEV__) {
    middlewares.push(logger)
 }
export default store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)
