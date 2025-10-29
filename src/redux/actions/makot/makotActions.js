import makotServices from "../../services/makot/makotServices";

export const MAKOT_ACTIONS = {
  MAKOT_LOADING: "MAKOT_LOADING",
  GET_MAKOT_BY_ID_SUCCESS: "GET_MAKOT_BY_ID_SUCCESS",
  GET_MAKOT_BY_ID_FAIL: "GET_MAKOT_BY_ID_FAIL",
  GET_ALL_MAKOT_SUCCESS: "GET_ALL_MAKOT_SUCCESS",
  GET_ALL_MAKOT_FAIL: "GET_ALL_MAKOT_FAIL",
  GET_MAKOTS_BY_CAT_ID_SUCCESS: "GET_MAKOTS_BY_CAT_ID_SUCCESS",
  GET_MAKOTS_BY_CAT_ID_FAIL: "GET_MAKOTS_BY_CAT_ID_FAIL",
  GET_MAKOT_BY_NAME_SUCCESS: "GET_MAKOT_BY_NAME_SUCCESS",
  GET_MAKOT_BY_NAME_FAIL: "GET_MAKOT_BY_NAME_FAIL",
}

export const getMakotById = (id) => async (dispatch) => {
  dispatch({ type: MAKOT_ACTIONS.MAKOT_LOADING})
  try {
    const res = await makotServices.getMakotById(id);
    console.log(res)
    if(res){
      dispatch({ type: MAKOT_ACTIONS.GET_MAKOT_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_ACTIONS.GET_MAKOT_BY_ID_FAIL, payload: error?.response?.data?.message || "get makot by id failed" });
  }
}

export const getAllMakot = () => async (dispatch) => {
  dispatch({ type: MAKOT_ACTIONS.MAKOT_LOADING})
  try {
    const res = await makotServices.getAllMakot();
    if(res){
      dispatch({ type: MAKOT_ACTIONS.GET_ALL_MAKOT_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_ACTIONS.GET_ALL_MAKOT_FAIL, payload: error?.response?.data?.message || "get all makot failed" });
  }
}

export const getMakotsByCatId = (id) => async (dispatch) => {
  dispatch({ type: MAKOT_ACTIONS.MAKOT_LOADING})
  try {
    const res = await makotServices.getMakotsByCatId(id);
    if(res){
      dispatch({ type: MAKOT_ACTIONS.GET_MAKOTS_BY_CAT_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_ACTIONS.GET_MAKOTS_BY_CAT_ID_FAIL, payload: error?.response?.data?.message || "get makot by cat id failed" });
  }
}

export const getMakotByName = ({name,language}) => async (dispatch) => {
  dispatch({ type: MAKOT_ACTIONS.MAKOT_LOADING})
  try {
    const res = await makotServices.getMakotByName({name: decodeURIComponent(name),language});
    if(res){
      dispatch({ type: MAKOT_ACTIONS.GET_MAKOT_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: MAKOT_ACTIONS.GET_MAKOT_BY_NAME_FAIL, payload: error?.response?.data?.message || "get makot by name failed" });
  }
}