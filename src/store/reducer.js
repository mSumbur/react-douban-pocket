import { combineReducers } from 'redux-immutable';
import { reducer as searchReducer } from '../pages/Search/store';

const reducer = combineReducers({
  search: searchReducer
})

export default reducer;
 