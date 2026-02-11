import { BUSINESS_ACTIONS } from "../actions/businessActions";

const initialState = {
  business: null,
  loading: false,
  error: null,
}

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUSINESS_ACTIONS.BUSINESS_LOADING:
      return { ...state, loading: true, error: null };
    case BUSINESS_ACTIONS.GET_BUSINESS_SUCCESS:
      return { ...state, business: action.payload, loading: false, error: null };
    case BUSINESS_ACTIONS.GET_BUSINESS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default businessReducer;