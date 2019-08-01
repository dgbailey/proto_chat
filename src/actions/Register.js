import axios from "axios";
export const REGISTRATION_START = "REGISTRATION_START"
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS"
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE"


export const register = (body) => dispatch => {

        const bod = body
        console.log(body)
        dispatch({type:REGISTRATION_START})
        return (
            axios
            .post(
                'http://localhost:8000/api/registration/',
                bod,
                {
                    headers: {
                        'Accept': 'application/json',
                    "Content-Type": "application/json",
                    }
                }
            )
            .then(res => {
                
                //token seems to automatically get placed in local storage
                localStorage.setItem("AUTH_TOKEN", res.data.token);

                dispatch({
                    type:REGISTRATION_SUCCESS,
                    payload:res.data
                })
            })
            .catch(err =>{
                dispatch({
                    type:REGISTRATION_FAILURE,
                    payload:err
                })
            })
        )
}