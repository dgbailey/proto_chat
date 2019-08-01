import {REGISTRATION_START,REGISTRATION_SUCCESS,REGISTRATION_FAILURE} from "../actions";

const initialState = {
    registrationStart:false,
    registrationSuccess:false,
    registrationFailure:false,
    error:""
}

export const RegistrationReducer = (state = initialState,action) =>{
    switch(action.type){
        case REGISTRATION_START:
        return{
            ...state,
            registrationStart:true,
            registrationSuccess:false,
            registrationFailure:false
        }

        case REGISTRATION_SUCCESS:
        return{
            ...state,
            registrationStart:false,
            registrationSuccess:true,
            registrationFailure:false,
            data:action.payload
        }

        case REGISTRATION_FAILURE:
        return{
            ...state,
            registrationStart:false,
            registrationSuccess:false,
            registrationFailure:true,
            error:action.payload
        }
     
        default:
            return state;
    }

   
        
       


}