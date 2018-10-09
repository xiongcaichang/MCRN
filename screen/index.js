import { BackHandler } from 'react-native'
import navigation from '../navigation'
import store from '../store';
import Toast from 'react-native-root-toast';

export default Target => class Enhancer extends Target {
    constructor(p){
        super(p);
        this.name = Target.name;
        this.end =0;
        this.begin=0;
        this.componentDidActive = this.componentDidActive.bind(this)
        this.componentWillDeactive = this.componentWillDeactive.bind(this);
        this.didFocusSubscription = this.props.navigation.addListener('didFocus',payload => this.componentDidActive(payload.state && payload.state.params || {}));
        this.willBlurSubscription = this.props.navigation.addListener('willBlur',payload => this.componentWillDeactive(payload.lastState && payload.lastState.params || {}));
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => this.backHardWare());
    }


    backHardWare = () => {
        if (super.backHardWare) {
            super.backHardWare();
            return true;
        } else {
            if (store.getState().nav.index === 0) {
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    BackHandler.exitApp();
                    return false;
                }
                Toast.show('再按一次退出!',{
                    duration: 1000,
                    position: Toast.positions.CENTER,
                });
               
                this.lastBackPressed = Date.now();  
                return true;
            } else {
                navigation.pop();
                return true;
            }
        }
    }

    getParam = (name, defaultValue) => {
        console.log(name,defaultValue);
    }
    componentDidActive = (params) => {
        super.componentDidActive && super.componentDidActive(params);
    }
    componentWillDeactive = (params) => {
        super.componentWillDeactive && super.componentWillDeactive(params);
    }
    componentWillMount(){
        super.componentWilMount && super.componentWilMount();
        this.begin = Date.now();
    }
    componentDidMount(){
        super.componentDidMount && super.componentDidMount();
        this.end=Date.now();
        if (__DEV__) {
            console.log(Target.name+'->组件渲染时间->'+(this.end-this.begin)+'ms')
        }
    }
    componentWillUnmount() {
        this.setState = () => {};
        this.didFocusSubscription.remove();
        this.willBlurSubscription.remove();
        this.backHandler.remove();
        super.componentWillUnmount && super.componentWillUnmount();

    }

    render(){
        let ele = super.render()
        return ele;
    }
}
