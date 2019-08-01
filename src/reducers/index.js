import {PusherReducer} from "./PusherReducer";
import {RegistrationReducer} from "./RegistrationReducer";
import { combineReducers } from "redux";



export default combineReducers({
    pusherReducer: PusherReducer,
    registrationReducer: RegistrationReducer,
  });