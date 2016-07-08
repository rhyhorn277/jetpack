import * as reducer from './reducer';
export * as actions from './actions';

const all = { ...reducer, ...actions };

export default all;
