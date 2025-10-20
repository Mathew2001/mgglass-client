import { REVIEW_ACTIONS } from "../actions/reviewActions";

const initialState = {
  reviews: [],
  review: null,
  reviewsByIsApproved: [],
  loading: false,
  error: null,
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.REVIEW_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case REVIEW_ACTIONS.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        loading: false,
        error: null,
      }
    case REVIEW_ACTIONS.CREATE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case REVIEW_ACTIONS.GET_REVIEWS_BY_IS_APPROVED_SUCCESS:
      return {
        ...state,
        reviewsByIsApproved: action.payload,
        loading: false,
        error: null,
      }
    case REVIEW_ACTIONS.GET_REVIEWS_BY_IS_APPROVED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reviewReducer;