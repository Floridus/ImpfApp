// Action types
import { addItemArrToStore, setQueryMetadata } from '../../../utils/storeUtils';

export const GET_VACCINATIONS = 'impf-app/vaccinations/LOAD';
export const GET_VACCINATIONS_SUCCESS = 'impf-app/vaccinations/LOAD_SUCCESS';
export const GET_VACCINATIONS_FAIL = 'impf-app/vaccinations/LOAD_FAIL';

const initalState = {
  allEntries: {},
  queries: {},
  metadata: {},
};

// Reducer
export default function reducer(state = initalState, action) {
  let queryKey, newState;

  switch (action.type) {
    case GET_VACCINATIONS:
      queryKey = action.queryKey;

      newState = { ...state };
      setQueryMetadata(queryKey, newState, {
        loading: true,
      });

      return newState;

    case GET_VACCINATIONS_SUCCESS:
      queryKey = action.meta.previousAction.queryKey;

      newState = addItemArrToStore(queryKey, state, action.payload.data);
      setQueryMetadata(queryKey, newState, {
        loading: false,
      });

      return newState;

    case GET_VACCINATIONS_FAIL:
      queryKey = action.queryKey;

      newState = { ...state };
      setQueryMetadata(queryKey, newState, {
        loading: false,
        error: true,
        errorMessage: action.error.message,
      });

      return newState;

    default:
      return state;
  }
}

// Actions

/**
 * Triggers an API request to fetch vaccinations
 * 
 * @param queryKey
 * @returns {{queryKey: string, type: string, payload: {request: {url: string}}}}
 */
export function fetchVaccinations(queryKey) {
  return {
    queryKey,
    type: GET_VACCINATIONS,
    payload: {
      request: {
        url: `/products/category/9`
      }
    }
  };
}