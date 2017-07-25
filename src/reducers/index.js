import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// as a result of combineReducers 'store.getState()' will contain whatever we pass to libraries
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
