import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers ({
    session_error: sessionErrorsReducer
})

export default errorsReducer;