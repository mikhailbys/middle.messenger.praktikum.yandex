import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
import constants from "../../constants";
import Router from "../../modules/router";

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
const messagePage = constants.routes.messages;

export const signIn = async (data: SignInData, router: Router) => {
    const response = await api.signIn(data);
    if (response?.status === 400 || response?.status === 401) {
        store.update(DEFAULT_PARAMS, currentPage);
    }
    if (response?.status === 200) {
        // todo в сторе хранить токен? или в локалсторедже
        router.go(messagePage);
    }
}