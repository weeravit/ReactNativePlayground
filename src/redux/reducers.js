import {combineReducers} from "redux";
import HomeReducer from '../home/HomeReducer'
import DiscoverReducer from '../discover/DiscoverReducer'

const appReducer = combineReducers({
    home: HomeReducer,
    discover: DiscoverReducer
});

export default appReducer;