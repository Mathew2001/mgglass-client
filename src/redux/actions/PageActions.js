import pageServices from "../services/PageServices";

export const LOADING_PAGE = "LOADING_PAGE";
export const GET_ALL_PAGES_SUCCESS = "GET_ALL_PAGES_SUCCESS";
export const GET_ALL_PAGES_FAIL = "GET_ALL_PAGES_FAIL";
export const GET_PAGE_BY_SLUG_SUCCESS = "GET_PAGE_BY_SLUG_SUCCESS";
export const GET_PAGE_BY_SLUG_FAIL = "GET_PAGE_BY_SLUG_FAIL";
export const getAllPages = () => async (dispatch) => {
  dispatch({ type: LOADING_PAGE });
  try {
    const res = await pageServices.getAllPages();
    if (res) {
      dispatch({ type: GET_ALL_PAGES_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: GET_ALL_PAGES_FAIL, payload: error?.response?.data?.message || "Error getting all pages" });
  }
};

export const getPageBySlug = (slug) => async (dispatch) => {
  dispatch({ type: LOADING_PAGE });
  try {
    const res = await pageServices.getPageBySlug(slug);
    if (res) {
      dispatch({ type: GET_PAGE_BY_SLUG_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: GET_PAGE_BY_SLUG_FAIL, payload: error?.response?.data?.message || "Error getting page by slug" });
  }
};
