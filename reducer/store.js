import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { counterValue } from './counterValue'
import { addTodo } from './TodosReducer'
import { filter } from './filterReducer'

const rootReducer = combineReducers({
    counterValue : counterValue,
    addTodo : addTodo,
    filter : filter
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'counterValue','addTodo'
    ],
    timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer
);
const persistor = persistStore(store);

export { store, persistor };