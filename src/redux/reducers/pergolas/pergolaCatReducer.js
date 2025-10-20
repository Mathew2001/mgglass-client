import { PERGOLA_CAT_ACTIONS } from "../../actions/pergolas/pergolaCatActions";

const initialState = {
  pergolaCats: [],
  pergolaCat: null,
  loading: false,
  error: null,
}

const pergolaCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERGOLA_CAT_ACTIONS.PERGOLA_CAT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_ID_SUCCESS:
      return {
        ...state,
        pergolaCat: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PERGOLA_CAT_ACTIONS.GET_ALL_PERGOLA_CAT_SUCCESS:
      return {
        ...state,
        pergolaCats: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_CAT_ACTIONS.GET_ALL_PERGOLA_CAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_NAME_SUCCESS:
      return {
        ...state,
        pergolaCat: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default pergolaCatReducer;