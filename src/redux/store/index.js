import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import songReducer from '../reducers/songReducer';
import favouritesReducer from '../reducers/favouritesReducer';

const persistConfig = {
    key: 'root', 
    storage, 
    transforms: [
        encryptTransform({
            secretKey: 'P455W0RD',//process.env.REACT_APP_PERSIST_KEY,
        }),
    ],
}

const bigReducer = combineReducers({
    song : songReducer,
    favourites : favouritesReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false, 
        }),
    })

export const persistor = persistStore(store)