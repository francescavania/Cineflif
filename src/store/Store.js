import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

//middleware
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

//storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import { rootReducer } from "./reducer/index";

//saga
import rootSaga from './saga'

const PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const PersistedReducer = persistReducer(PersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()


const AllMiddleware = applyMiddleware(sagaMiddleware, logger)

//bikin store
export const Store = createStore(PersistedReducer, AllMiddleware);

//create current store persisted
export const Persistor = persistStore(Store)

//run saga
sagaMiddleware.run(rootSaga)