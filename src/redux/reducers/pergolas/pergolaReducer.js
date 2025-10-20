import { PERGOLA_ACTIONS } from "../../actions/pergolas/pergolaActions";

const initialState = {
  pergolas: [],
  pergola: null,
  pergolasByCatId: [],
  loading: false,
  error: null,
}

const pergolaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERGOLA_ACTIONS.PERGOLA_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_ID_SUCCESS:
      return {
        ...state,
        pergola: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PERGOLA_ACTIONS.GET_ALL_PERGOLA_SUCCESS:
      return {
        ...state,
        pergolas: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_ACTIONS.GET_ALL_PERGOLA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_CAT_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_CAT_ID_SUCCESS:
      return {
        ...state,
        pergolasByCatId: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_NAME_SUCCESS:
      return {
        ...state,
        pergola: action.payload,
        loading: false,
        error: null,
      }
    case PERGOLA_ACTIONS.GET_PERGOLA_BY_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default pergolaReducer;
