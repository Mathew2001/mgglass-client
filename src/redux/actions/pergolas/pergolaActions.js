import pergolaServices from "../../services/pergolas/pergolaServices";

export const PERGOLA_ACTIONS = {
  PERGOLA_LOADING: "PERGOLA_LOADING",
  GET_PERGOLA_BY_ID_SUCCESS: "GET_PERGOLA_BY_ID_SUCCESS",
  GET_PERGOLA_BY_ID_FAIL: "GET_PERGOLA_BY_ID_FAIL",
  GET_ALL_PERGOLA_SUCCESS: "GET_ALL_PERGOLA_SUCCESS",
  GET_ALL_PERGOLA_FAIL: "GET_ALL_PERGOLA_FAIL",
  GET_PERGOLA_BY_CAT_ID_SUCCESS: "GET_PERGOLA_BY_CAT_ID_SUCCESS",
  GET_PERGOLA_BY_CAT_ID_FAIL: "GET_PERGOLA_BY_CAT_ID_FAIL",
  GET_PERGOLA_BY_NAME_SUCCESS: "GET_PERGOLA_BY_NAME_SUCCESS",
  GET_PERGOLA_BY_NAME_FAIL: "GET_PERGOLA_BY_NAME_FAIL",
}

export const getPergolaById = (id) => async (dispatch) => {
  dispatch({ type: PERGOLA_ACTIONS.PERGOLA_LOADING})
  try {
    const res = await pergolaServices.getPergolaById(id);
    if(res){
      dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_ID_FAIL, payload: error?.response?.data?.message || "get pergola by id failed" });
  }
}

export const getAllPergola = () => async (dispatch) => {
  dispatch({ type: PERGOLA_ACTIONS.PERGOLA_LOADING})
  try {
    const res = await pergolaServices.getAllPergola();
    if(res){
      dispatch({ type: PERGOLA_ACTIONS.GET_ALL_PERGOLA_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_ACTIONS.GET_ALL_PERGOLA_FAIL, payload: error?.response?.data?.message || "get all pergola failed" });
  }
}

export const getPergolaByCatId = (id) => async (dispatch) => {
  dispatch({ type: PERGOLA_ACTIONS.PERGOLA_LOADING})
  try {
    const res = await pergolaServices.getPergolaByCatId(id);
    if(res){
      dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_CAT_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_CAT_ID_FAIL, payload: error?.response?.data?.message || "get pergola by cat id failed" });
  }
}

export const getPergolaByName = ({name,language}) => async (dispatch) => {
  dispatch({ type: PERGOLA_ACTIONS.PERGOLA_LOADING})
  try {
    const res = await pergolaServices.getPergolaByName({name: decodeURIComponent(name),language});
    if(res){
      dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_ACTIONS.GET_PERGOLA_BY_NAME_FAIL, payload: error?.response?.data?.message || "get pergola by name failed" });
  }
}