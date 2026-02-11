import reviewServices from "../services/reviewServices";

export const REVIEW_ACTIONS = {
  REVIEW_LOADING: "REVIEW_LOADING",
  CREATE_REVIEW_SUCCESS: "CREATE_REVIEW_SUCCESS",
  CREATE_REVIEW_FAIL: "CREATE_REVIEW_FAIL",
  GET_REVIEWS_BY_IS_APPROVED_SUCCESS: "GET_REVIEWS_BY_IS_APPROVED_SUCCESS",
  GET_REVIEWS_BY_IS_APPROVED_FAIL: "GET_REVIEWS_BY_IS_APPROVED_FAIL",
}

export const createReview = ({userName, content, rating, isApproved}) => async (dispatch) => {
  dispatch({ type: REVIEW_ACTIONS.REVIEW_LOADING})
  try {
    const res = await reviewServices.createReview({userName, content, rating, isApproved});
    if(res){
      dispatch({ type: REVIEW_ACTIONS.CREATE_REVIEW_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: REVIEW_ACTIONS.CREATE_REVIEW_FAIL, payload: error?.response?.data?.message || "create review failed" });
  }
}

// export const getReviewById = (id) => async (dispatch) => {
//   dispatch({ type: REVIEW_ACTIONS.REVIEW_LOADING})
//   try {
//     const res = await reviewServices.getReviewById(id);
//     if(res){
//       dispatch({ type: REVIEW_ACTIONS.GET_REVIEW_BY_ID_SUCCESS, payload: res });
//     }
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: REVIEW_ACTIONS.GET_REVIEW_BY_ID_FAIL, payload: error?.response?.data?.message || "get review by id failed" });
//   }
// }

export const getReviewsByIsApproved = () => async (dispatch) => {
  dispatch({ type: REVIEW_ACTIONS.REVIEW_LOADING})
  try {
    const res = await reviewServices.getReviewsByIsApproved();
    if(res){
      dispatch({ type: REVIEW_ACTIONS.GET_REVIEWS_BY_IS_APPROVED_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: REVIEW_ACTIONS.GET_REVIEWS_BY_IS_APPROVED_FAIL, payload: error?.response?.data?.message || "get reviews by is approved failed" });
  }
}

