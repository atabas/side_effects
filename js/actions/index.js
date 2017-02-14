import axios from 'axios';

export const SEARCH_MEDICINE = 'SEARCH_MEDICINE';
export function loadMedicineReactions(name) {
  return {
    type: SEARCH_MEDICINE,
    promise: axios.get('/all_medicines/'+ name)
  }; 
}

export const SEARCH_EXACT_MEDICINE = 'SEARCH_EXACT_MEDICINE';
export function loadExactMedicineReactions(name) {
  return {
    type: SEARCH_EXACT_MEDICINE,
    promise: axios.get('/medicine/'+name)
  };
}