import {combineReducers} from 'redux';

const INITIAL_STATE = {};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PHOTO':
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          uri: action.payload.uri,
          date: action.payload.date,
        },
      };
    default:
      return state;
  }
};

console.log('state ', INITIAL_STATE);

export default combineReducers({
  photos: rootReducer,
});
