import { StackActions, NavigationActions } from 'react-navigation'
import store from '../store';

const navigation = {};
const resetRoute = (routeName, params = {}, routeIndex = 0, key) => {
    if (routeName) {
        store.dispatch(
            StackActions.reset({
              index: routeIndex,
              actions: [
                NavigationActions.navigate({
                  routeName,
                  params,
                  key,
                }),
              ],
            })
        )
    }
}
const push = (routeName, params = {}) => {
    store.dispatch(StackActions.push({routeName, params}))
}

const back = (key) => {
    if (key){
        store.dispatch(NavigationActions.back({key}))
    } else {
        store.dispatch(StackActions.pop())
    }
}

const goTo = (routeName, params = {}) => {
    store.dispatch(NavigationActions.navigate({routeName,params}))
}

navigation.push = push;
navigation.pop = back;

navigation.goTo = goTo;
navigation.back = back;

navigation.resetRoute = resetRoute;
export default navigation;