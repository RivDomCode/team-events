import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    //aqui vamos a utilizar información que viene del store
    //vamos a coger del authSlice el status el error y el errorMsg
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch  = useDispatch();

    const startLogin = async({ email, password })=> {

            dispatch(onChecking());

        try {
            const {data } = await calendarApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            dispatch(onLogin({ name: data.name, uid: data.uid}));

        } catch (error) {
            dispatch(onLogout('Wrong user details'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 1);
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