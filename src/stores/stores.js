import { createStore, combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import user from './reducer/userReducer'
// create reduces
const reducer = combineReducers({user})

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = (state, action) => {
    if (action.type === "UNSET_AUTH") {
        state = undefined
    }
    return reducer(state, action)
}


const persistReduser = persistReducer(persistConfig, rootReducer)
const configStore = () => createStore(persistReduser)

export default configStore;