import { MECKLAHON_CAT_ACTIONS } from "../../actions/mecklahons/mecklahonCatActions";

const initialState = {
  mecklahonCats: [],
  mecklahonCat: null,
  loading: false,
  error: null,
}

const mecklahonCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case MECKLAHON_CAT_ACTIONS.MECKLAHON_CAT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_ID_SUCCESS:
      return {
        ...state,
        mecklahonCat: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MECKLAHON_CAT_ACTIONS.GET_ALL_MECKLAHON_CAT_SUCCESS:
      return {
        ...state,
        mecklahonCats: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_CAT_ACTIONS.GET_ALL_MECKLAHON_CAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_NAME_SUCCESS:
      return {
        ...state,
        mecklahonCat: action.payload,
        loading: false,
        error: null,
      }
    case MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default mecklahonCatReducer;