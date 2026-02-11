import businessServices from "../services/businessServices";

export const BUSINESS_ACTIONS = {
  BUSINESS_LOADING: "BUSINESS_LOADING",
  GET_BUSINESS_SUCCESS: "GET_BUSINESS_SUCCESS",
  GET_BUSINESS_FAIL: "GET_BUSINESS_FAIL",
}

export const getBusiness = () => async (dispatch) => {
  dispatch({ type: BUSINESS_ACTIONS.BUSINESS_LOADING });
  try {
    const res = await businessServices.getBusiness();
    if(res){
      dispatch({ type: BUSINESS_ACTIONS.GET_BUSINESS_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: BUSINESS_ACTIONS.GET_BUSINESS_FAIL, payload: error?.response?.data?.message || "get business failed" });
  }
}

