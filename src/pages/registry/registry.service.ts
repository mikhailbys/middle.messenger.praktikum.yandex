import AuthAPI from "../../api/auth-api";
import constants from "../../constants";
import Router from "../../modules/router";

export interface SignUpData {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

const DEFAULT_PARAMS = {
    firstNameInput: '',
    secondNameInput: '',
    loginInput: '',
    mailInput: '',
    passwordInput: '',
    phoneInput: '',
    passwordRepeatInput: ''
};

const api = new AuthAPI();

export const signUp = async (data: SignUpData, router: Router) => {
    const response = await api.signUp(data);
    if (response?.status === 400) {
        alert(response?.message);
    }

    if (response?.status === 200) {
        alert('Регистрация прошла успешно, выполните вход');
        router.go(constants.routes.main);
    }
}