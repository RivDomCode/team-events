import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";

export const useAuthStore = () => {

    //aqui vamos a utilizar información que viene del store
    //vamos a coger del authSlice el status el error y el errorMsg
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch  = useDispatch();

    const startLogin = async({ email, password })=> {
        console.log({email, password})

        try {
            const resp = await calendarApi.post('/auth', {email, password});
            console.log({resp})

        } catch (error) {
            console.log(error)
        }

    }
    return {
        //propiedades para interactuar con nuestro store
        status,
        errorMessage,
        user,
        //métodos para interactuar con nuestro store
        startLogin,

    }
}