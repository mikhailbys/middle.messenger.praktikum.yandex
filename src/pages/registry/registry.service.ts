import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
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
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: ''
};

const api = new AuthAPI();
const store = new Store();
const currentPage = constants.routes.signUp;

export const signUp = async (data: SignUpData, router: Router) => {
    const response = await api.signIn(data);
    if (response?.status === 400) {
        //store.update(DEFAULT_PARAMS, currentPage);
    } else {
        console.log(response);
        alert('Регистрация прошла успешно, выполните вход');
        router.go(constants.routes.main);
        // todo process values
    }
}