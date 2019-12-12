export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// (payload) => {
//     return { type: 'ADD_FEATURE', payload: payload }
// }

export function addFeature(newFeature) {
    console.log(newFeature);
    return {
      type: ADD_FEATURE,
      payload: newFeature
    }
};

export function removeFeature(remFeature) {
    console.log(remFeature);
    return {
      type: REMOVE_FEATURE,
      payload: remFeature
    }
};