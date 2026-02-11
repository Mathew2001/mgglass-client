import { 
  GET_ALL_PAGES_SUCCESS,
  GET_ALL_PAGES_FAIL,
  GET_PAGE_BY_SLUG_SUCCESS,
  GET_PAGE_BY_SLUG_FAIL,
  LOADING_PAGE,
} from "../actions/PageActions";

const initialState = {
  pages: [],
  pageBySlug: null,
  loading: false,
  error: null,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PAGE:
      return { ...state, loading: true, error: null };
    case GET_ALL_PAGES_SUCCESS:
      return { ...state, pages: action.payload, loading: false, error: null };
    case GET_ALL_PAGES_FAIL:
      return { ...state, error: action.payload, loading: false };
    case GET_PAGE_BY_SLUG_SUCCESS:
      return { ...state, pageBySlug: action.payload, loading: false, error: null };
    case GET_PAGE_BY_SLUG_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default pageReducer;