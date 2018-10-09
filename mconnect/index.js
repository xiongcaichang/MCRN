import { connect } from 'react-redux';

const get = (object, path, defaultValue) => {
  return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
          .reduce((o, k) => (o || {})[k], object) || defaultValue;
}

export const getState = subscribedNodes => state => ({
  ...Object.keys(subscribedNodes).reduce(
    (acc, key) => ({
      ...acc,
      [key]: get(state, subscribedNodes[key]),
    }),
    {},
  ),
});

export const getDispatch = dispatchobj => dispatch =>
  Object.keys(dispatchobj)
    .map(keys => ({
      [keys]: (...args) => dispatch(dispatchobj[keys](...args)),
    }))
    .reduce((last, curr) => ({ ...last, ...curr }), {});

export default mconnect = (
  stateKeys = null,
  dispatchActions = null,
) => WrappedComponent =>
  connect(
    stateKeys ? () => getState(stateKeys) : null,
    dispatchActions ? () => getDispatch(dispatchActions) : null,
  )(WrappedComponent);
