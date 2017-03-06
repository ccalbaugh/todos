import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';

// This thunk middleware supports the dispatching of thunks
// It takes the store, next middleware, and action as current args (just like any other middleware)
// const thunk = (store) => (next) => (action) =>
// // If action is a func, then assume it's a thunk that wants the dispatch func to be injected into it
// 	typeof action === 'function' ?
// 		action(store.dispatch, store.getState) :
// 		next(action);

// MANY MIDDLEWARES ARE AVAILABLE FROM NPM
// const logger = (store) => (next) => {
// 	if (!console.group) {
// 		return next;
// 	}
// 	return (action) => {
// 		console.group(action.type);
// 		console.log('%c prev state', 'color: gray', store.getState());
// 		console.log('%c action', 'color: blue', action);
// 		const returnValue = next(action);
// 		console.log('%c next state', 'color: green', store.getState());
// 		console.groupEnd(action.type);
// 		return returnValue;
// 	};
// };

// const promise = (store) => (next) => (action) => {
// 	if (typeof action.then === 'function') {
// 		return action.then(next);
// 	}
// 	return next(action);
// };

// const wrapDispatchWithmiddlewares = (store, middlewares) => {
// 	middlewares.slice().reverse().forEach(middleware =>
// 		store.dispatch = middleware(store)(store.dispatch)
// 	);
// };

const configureStore = () => {
	const middlewares = [thunk];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}
	return createStore(
		todoApp,
		applyMiddleware(...middlewares) // This last arg to createStore is called an enhancer, it's optional
		 // Whatever is passed as the second arg to createStore will end up as the state for the root reducer
	); // You can use the 2nd arg to hydrate the redux store with persisted data because it was obtained from redux
	// and therefor doesn't break encapsulation of reducers
};

export default configureStore; // Its good to export it instead of having it store itself
// because when you're testing you can create as many instances as you want