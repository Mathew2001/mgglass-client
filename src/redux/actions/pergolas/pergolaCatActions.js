import pergolaCatServices from "../../services/pergolas/pergolaCatServices";

export const PERGOLA_CAT_ACTIONS = {
  PERGOLA_CAT_LOADING: "PERGOLA_CAT_LOADING",
  GET_PERGOLA_CAT_BY_ID_SUCCESS: "GET_PERGOLA_CAT_BY_ID_SUCCESS",
  GET_PERGOLA_CAT_BY_ID_FAIL: "GET_PERGOLA_CAT_BY_ID_FAIL",
  GET_ALL_PERGOLA_CAT_SUCCESS: "GET_ALL_PERGOLA_CAT_SUCCESS",
  GET_ALL_PERGOLA_CAT_FAIL: "GET_ALL_PERGOLA_CAT_FAIL",
  GET_PERGOLA_CAT_BY_NAME_SUCCESS: "GET_PERGOLA_CAT_BY_NAME_SUCCESS",
  GET_PERGOLA_CAT_BY_NAME_FAIL: "GET_PERGOLA_CAT_BY_NAME_FAIL",
}

export const getPergolaCatById = (id) => async (dispatch) => {
  dispatch({ type: PERGOLA_CAT_ACTIONS.PERGOLA_CAT_LOADING})
  try {
    const res = await pergolaCatServices.getPergolaCatById(id);
    if(res){
      dispatch({ type: PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_ID_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_ID_FAIL, payload: error?.response?.data?.message || "get pergola cat by id failed" });
  }
}   

export const getAllPergolaCat = () => async (dispatch) => {
  dispatch({ type: PERGOLA_CAT_ACTIONS.PERGOLA_CAT_LOADING})
  try {
    const res = await pergolaCatServices.getAllPergolaCat();
    if(res){
      dispatch({ type: PERGOLA_CAT_ACTIONS.GET_ALL_PERGOLA_CAT_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_CAT_ACTIONS.GET_ALL_PERGOLA_CAT_FAIL, payload: error?.response?.data?.message || "get all pergola cat failed" });
  }
}

export const getPergolaCatByName = (name) => async (dispatch) => {
  dispatch({ type: PERGOLA_CAT_ACTIONS.PERGOLA_CAT_LOADING})
  try {
    const res = await pergolaCatServices.getPergolaCatByName(name);
    console.log(res)
    if(res){
      dispatch({ type: PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_NAME_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PERGOLA_CAT_ACTIONS.GET_PERGOLA_CAT_BY_NAME_FAIL, payload: error?.response?.data?.message || "get pergola cat by name failed" });
  }
}
