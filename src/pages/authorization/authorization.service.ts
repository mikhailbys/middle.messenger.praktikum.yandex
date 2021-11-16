import AuthAPI from "../../api/auth-api";

interface Data {
    login: string,
    password: string
}

const api = new AuthAPI();

export const signIn = async (data: Data) => {
    const response = await api.request(data);
    debugger
    if (response?.status === 400) {
        (<HTMLInputElement>document.getElementById('#auth-login')).value = '';
        (<HTMLInputElement>document.getElementById('#auth-password')).value = '';
    } else {
        // todo process values
    }
}