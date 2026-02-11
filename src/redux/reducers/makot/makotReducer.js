import { MAKOT_ACTIONS } from "../../actions/makot/makotActions";

const initialState = {
  makots: [],
  makot: null,
  makotsByCatId: [],
  loading: false,
  error: null,
}

const makotReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKOT_ACTIONS.MAKOT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case MAKOT_ACTIONS.GET_MAKOT_BY_ID_SUCCESS:
      return {
        ...state,
        makot: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_ACTIONS.GET_MAKOT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MAKOT_ACTIONS.GET_ALL_MAKOT_SUCCESS:
      return {
        ...state,
        makots: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_ACTIONS.GET_ALL_MAKOT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MAKOT_ACTIONS.GET_MAKOTS_BY_CAT_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case MAKOT_ACTIONS.GET_MAKOTS_BY_CAT_ID_SUCCESS:
      return {
        ...state,
        makotsByCatId: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_ACTIONS.GET_MAKOT_BY_NAME_SUCCESS:
      return {
        ...state,
        makot: action.payload,
        loading: false,
        error: null,
      }
    case MAKOT_ACTIONS.GET_MAKOT_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default makotReducer;
