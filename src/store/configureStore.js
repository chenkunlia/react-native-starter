import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware), autoRehydrate());

export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	persistStore(store, { storage: AsyncStorage });
	return store;
}