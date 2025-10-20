import { MAKOT_CAT_ACTIONS } from "../../actions/makot/makotCatActions";

const initialState = {
  makotCats: [],
  makotCat: null,
  loading: false,
  error: null,
}

const makotCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKOT_CAT_ACTIONS.MAKOT_CAT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_ID_SUCCESS:
      return {
        ...state,
        makotCat: action.payload,
        loading: false,
        error: null,
      }
     case MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MAKOT_CAT_ACTIONS.GET_ALL_MAKOT_CAT_SUCCESS:
      return {
        ...state,
        makotCats: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_CAT_ACTIONS.GET_ALL_MAKOT_CAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_NAME_SUCCESS:
      return {
        ...state,
        makotCat: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default makotCatReducer;