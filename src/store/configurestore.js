import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import rootSaga from "../saga/index";
import logger from 'redux-logger'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger()));
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore