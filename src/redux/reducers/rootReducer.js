import { combineReducers } from "redux";
import mecklahonReducer from "./mecklahons/mecklahonReducer";
import mecklahonCatReducer from "./mecklahons/mecklahonCatReducer";
import pergolaReducer from "./pergolas/pergolaReducer";
import pergolaCatReducer from "./pergolas/pergolaCatReducer";
import makotReducer from "./makot/makotReducer";
import makotCatReducer from "./makot/makotCatReducer";
import reviewReducer from "./reviewReducer";
import contactUsReducer from "./contactReducers";

const rootReducer = combineReducers({
  mecklahonReducer: mecklahonReducer,
  mecklahonCatReducer: mecklahonCatReducer,
  pergolaReducer: pergolaReducer,
  pergolaCatReducer: pergolaCatReducer,
  makotReducer: makotReducer,
  makotCatReducer: makotCatReducer,
  reviewReducer: reviewReducer,
  contactUsReducer: contactUsReducer,
});

export default rootReducer;

