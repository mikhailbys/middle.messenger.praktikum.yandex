import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
import constants from "../../constants";

interface Data {
    login: string,
    password: string
}

const api = new AuthAPI();
const store = new Store();
const currentPage = constants.routes.main;

export const signIn = async (data: Data) => {
    const response = await api.request(data);
    if (response?.status === 400) {
        store.update({ loginInput: '', passwordInput: ''}, currentPage);
    } else {
        // todo process values
    }
}