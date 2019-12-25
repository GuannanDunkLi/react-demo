import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to make the react-devtool-extension in browser work

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;