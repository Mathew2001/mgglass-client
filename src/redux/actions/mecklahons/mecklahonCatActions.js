import mecklahonCatServices from "../../services/mecklahons/mecklahonCatServices";

export const MECKLAHON_CAT_ACTIONS = {
  MECKLAHON_CAT_LOADING: "MECKLAHON_CAT_LOADING",
  GET_MECKLAHON_CAT_BY_ID_SUCCESS: "GET_MECKLAHON_CAT_BY_ID_SUCCESS",
  GET_MECKLAHON_CAT_BY_ID_FAIL: "GET_MECKLAHON_CAT_BY_ID_FAIL",
  GET_ALL_MECKLAHON_CAT_SUCCESS: "GET_ALL_MECKLAHON_CAT_SUCCESS",
  GET_ALL_MECKLAHON_CAT_FAIL: "GET_ALL_MECKLAHON_CAT_FAIL",
  GET_MECKLAHON_CAT_BY_NAME_SUCCESS: "GET_MECKLAHON_CAT_BY_NAME_SUCCESS",
  GET_MECKLAHON_CAT_BY_NAME_FAIL: "GET_MECKLAHON_CAT_BY_NAME_FAIL",
}

export const getMeklahonCatById = (id) => async (dispatch) => {
  dispatch({ type: MECKLAHON_CAT_ACTIONS.MECKLAHON_CAT_LOADING})
  try {
    const res = await mecklahonCatServices.getMeklahonCatById(id);
    if(res){
      dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_ID_FAIL, payload: error?.response?.data?.message || "get meklahon cat by id failed" });
  }
}   

export const getAllMeklahonCat = () => async (dispatch) => {
  dispatch({ type: MECKLAHON_CAT_ACTIONS.MECKLAHON_CAT_LOADING})
  try {
    const res = await mecklahonCatServices.getAllMeklahonCat();
    if(res){
      dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_ALL_MECKLAHON_CAT_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_ALL_MECKLAHON_CAT_FAIL, payload: error?.response?.data?.message || "get all meklahon cat failed" });
  }
}

export const getMeklahonCatByName = ({name,language}) => async (dispatch) => {
  dispatch({ type: MECKLAHON_CAT_ACTIONS.MECKLAHON_CAT_LOADING})
  try {
    const res = await mecklahonCatServices.getMeklahonCatByName({name: decodeURIComponent(name),language});
    if(res){
      dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MECKLAHON_CAT_ACTIONS.GET_MECKLAHON_CAT_BY_NAME_FAIL, payload: error?.response?.data?.message || "get meklahon cat by name failed" });
  }
}