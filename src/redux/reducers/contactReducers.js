import { CONTACT_US_ACTIONS } from "../actions/contactUsActions";

const initialState = {
  contactUs: [],
  loading: false,
  error: null,
}

const contactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_US_ACTIONS.CONTACT_US_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case CONTACT_US_ACTIONS.CREATE_CONTACT_US_SUCCESS:
      return {
        ...state,
        contactUs: [...state.contactUs, action.payload],
        loading: false,
        error: null,
      }
    case CONTACT_US_ACTIONS.CREATE_CONTACT_US_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default contactUsReducer;