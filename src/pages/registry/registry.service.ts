import AuthApi from "../../api/auth/auth.api";
import constants from "../../constants";
import Router from "../../modules/router";
import {SignUp} from "../../models/signUp.model";

const api = new AuthApi();

export const signUp = async (data: SignUp, router: Router) => {
    const response = await api.signUp(data);
    if (response?.status === 400) {
        alert(response?.message);
    }

    if (response?.status === 200) {
        alert('Регистрация прошла успешно, выполните вход');
        router.go(constants.routes.main);
    }
}