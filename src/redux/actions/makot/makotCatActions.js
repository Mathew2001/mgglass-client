import makotCatServices from "../../services/makot/makotCatServices";

export const MAKOT_CAT_ACTIONS = {
  MAKOT_CAT_LOADING: "MAKOT_CAT_LOADING",
  GET_MAKOT_CAT_BY_ID_SUCCESS: "GET_MAKOT_CAT_BY_ID_SUCCESS",
  GET_MAKOT_CAT_BY_ID_FAIL: "GET_MAKOT_CAT_BY_ID_FAIL",
  GET_ALL_MAKOT_CAT_SUCCESS: "GET_ALL_MAKOT_CAT_SUCCESS",
  GET_ALL_MAKOT_CAT_FAIL: "GET_ALL_MAKOT_CAT_FAIL",
  GET_MAKOT_CAT_BY_NAME_SUCCESS: "GET_MAKOT_CAT_BY_NAME_SUCCESS",
  GET_MAKOT_CAT_BY_NAME_FAIL: "GET_MAKOT_CAT_BY_NAME_FAIL",
}


export const getMakotCatById = (id) => async (dispatch) => {
  dispatch({ type: MAKOT_CAT_ACTIONS.MAKOT_CAT_LOADING})
  try {
    const res = await makotCatServices.getMakotCatById(id);
    if(res){
      dispatch({ type: MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_ID_FAIL, payload: error?.response?.data?.message || "get makot cat by id failed" });
  }
}   

export const getAllMakotCat = () => async (dispatch) => {
  dispatch({ type: MAKOT_CAT_ACTIONS.MAKOT_CAT_LOADING})
  try {
    const res = await makotCatServices.getAllMakotCat();
    if(res){
      dispatch({ type: MAKOT_CAT_ACTIONS.GET_ALL_MAKOT_CAT_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_CAT_ACTIONS.GET_ALL_MAKOT_CAT_FAIL, payload: error?.response?.data?.message || "get all makot cat failed" });
  }
}

export const getMakotCatByName = (name) => async (dispatch) => {
  dispatch({ type: MAKOT_CAT_ACTIONS.MAKOT_CAT_LOADING})
  try {
    const res = await makotCatServices.getMakotCatByName(name);
    if(res){
      dispatch({ type: MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_CAT_ACTIONS.GET_MAKOT_CAT_BY_NAME_FAIL, payload: error?.response?.data?.message || "get makot cat by name failed" });
  }
}