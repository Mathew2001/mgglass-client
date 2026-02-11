import { MECKLAHON_ACTIONS } from "../../actions/mecklahons/mecklahonActions";

const initialState = {
  mecklahons: [],
  mecklahon: null,
  mecklahonsByCatId: [],
  loading: false,
  error: null,
}

const mecklahonReducer = (state = initialState, action) => {
  switch (action.type) {
    case MECKLAHON_ACTIONS.MECKLAHON_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_ID_SUCCESS:
      return {
        ...state,
        mecklahon: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MECKLAHON_ACTIONS.GET_ALL_MECKLAHON_SUCCESS:
      return {
        ...state,
        mecklahons: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_ACTIONS.GET_ALL_MECKLAHON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_CAT_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_CAT_ID_SUCCESS:
      return {
        ...state,
        mecklahonsByCatId: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_NAME_SUCCESS:
      return {
        ...state,
        mecklahon: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_ACTIONS.GET_MECKLAHON_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default mecklahonReducer;
