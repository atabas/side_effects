var actions = require('../actions/index');
import { handle } from 'redux-pack';

var initialMedState = {medicine: []};

var MedReducer = function(state, action){
  state = state || {initialMedState};
  if(action.type === actions.SEARCH_MEDICINE && action.payload){
    return handle(state, action, {
      failure: s => ({ ...s, medicineError: action.payload }),
      success: s => ({ ...s, medicine: action.payload.data }),
    });
  }
  else if(action.type === actions.SEARCH_EXACT_MEDICINE && action.payload){
    return handle(state, action, {
      failure: s => ({ ...s, medicineError: action.payload }),
      success: s => ({ ...s, exact_medicine: action.payload.data }),
    });
  }

  return state;
};

export default MedReducer;