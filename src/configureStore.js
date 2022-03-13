import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './redux/rootReducer.ts';
import rootSaga from './redux/sagas';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware, thunk)));
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);

    return { store, persistor };
}
