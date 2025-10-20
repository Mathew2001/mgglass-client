import contactUsServices from "../services/contactUsServices";

export const CONTACT_US_ACTIONS = {
  CONTACT_US_LOADING: "CONTACT_US_LOADING",
  CREATE_CONTACT_US_SUCCESS: "CREATE_CONTACT_US_SUCCESS",
  CREATE_CONTACT_US_FAIL: "CREATE_CONTACT_US_FAIL",
}

export const createContactUs = (data) => async (dispatch) => {
  dispatch({ type: CONTACT_US_ACTIONS.CONTACT_US_LOADING})
  try {
    const res = await contactUsServices.createContactUs(data);
    if(res){
      dispatch({ type: CONTACT_US_ACTIONS.CREATE_CONTACT_US_SUCCESS, payload: res });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: CONTACT_US_ACTIONS.CREATE_CONTACT_US_FAIL, payload: error?.response?.data?.message || "create contact us failed" });
  }
}

