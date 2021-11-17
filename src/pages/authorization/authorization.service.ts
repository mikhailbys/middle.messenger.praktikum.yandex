import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
import {AUTH_PAGE} from "./authorization.view";

interface Data {
    login: string,
    password: string
}

const api = new AuthAPI();
const store = new Store();

export const signIn = async (data: Data) => {
    const response = await api.request(data);
    debugger
    if (response?.status === 400) {
        store.update({ login: '', password: '' }, AUTH_PAGE);
    } else {
        // todo process values
    }
}