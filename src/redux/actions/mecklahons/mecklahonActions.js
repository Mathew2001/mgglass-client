import mecklahonServices from "../../services/mecklahons/mecklahonServices";

export const MECKLAHON_ACTIONS = {
  MECKLAHON_LOADING: "MECKLAHON_LOADING",
  GET_MECKLAHON_BY_ID_SUCCESS: "GET_MECKLAHON_BY_ID_SUCCESS",
  GET_MECKLAHON_BY_ID_FAIL: "GET_MECKLAHON_BY_ID_FAIL",
  GET_ALL_MECKLAHON_SUCCESS: "GET_ALL_MECKLAHON_SUCCESS",
  GET_ALL_MECKLAHON_FAIL: "GET_ALL_MECKLAHON_FAIL",
  GET_MECKLAHON_BY_CAT_ID_SUCCESS: "GET_MECKLAHON_BY_CAT_ID_SUCCESS",
  GET_MECKLAHON_BY_CAT_ID_FAIL: "GET_MECKLAHON_BY_CAT_ID_FAIL",
  GET_MECKLAHON_BY_NAME_SUCCESS: "GET_MECKLAHON_BY_NAME_SUCCESS",
  GET_MECKLAHON_BY_NAME_FAIL: "GET_MECKLAHON_BY_NAME_FAIL",
}

export const getMeklahonById = (id) => async (dispatch) => {
  dispatch({ type: MECKLAHON_ACTIONS.MECKLAHON_LOADING})
  try {
    const res = await mecklahonServices.getMeklahonById(id);
    if(res){
      dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_ID_FAIL, payload: error?.response?.data?.message || "get meklahon by id failed" });
  }
}

export const getAllMeklahon = () => async (dispatch) => {
  dispatch({ type: MECKLAHON_ACTIONS.MECKLAHON_LOADING})
  try {
    const res = await mecklahonServices.getAllMeklahon();
    if(res){
      dispatch({ type: MECKLAHON_ACTIONS.GET_ALL_MECKLAHON_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_ACTIONS.GET_ALL_MECKLAHON_FAIL, payload: error?.response?.data?.message || "get all meklahon failed" });
  }
}

export const getMeklahonByCatId = (id) => async (dispatch) => {
  dispatch({ type: MECKLAHON_ACTIONS.MECKLAHON_LOADING})
  try {
    const res = await mecklahonServices.getMeklahonByCatId(id);
    if(res){
      dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_CAT_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_CAT_ID_FAIL, payload: error?.response?.data?.message || "get meklahon by cat id failed" });
  }
}

export const getMeklahonByName = (name) => async (dispatch) => {
  dispatch({ type: MECKLAHON_ACTIONS.MECKLAHON_LOADING})
  try {
    const res = await mecklahonServices.getMeklahonByName(name);
    if(res){
      dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_ACTIONS.GET_MECKLAHON_BY_NAME_FAIL, payload: error?.response?.data?.message || "get meklahon by name failed" });
  }
}