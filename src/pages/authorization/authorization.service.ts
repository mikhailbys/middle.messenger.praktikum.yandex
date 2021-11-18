import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
import constants from "../../constants";

export interface SignInData {
    login: string,
    password: string,
}

const DEFAULT_PARAMS = {
    loginInput: '',
    passwordInput: ''
};

const api = new AuthAPI();
const store = new Store();
const currentPage = constants.routes.main;

export const signIn = async (data: SignInData) => {
    const response = await api.signIn(data);
    if (response?.status === 400) {
        store.update(DEFAULT_PARAMS, currentPage);
    } else {
        // todo process values
    }
}