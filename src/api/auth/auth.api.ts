import {BaseAPI} from "../base-api";
import HTTPTransport from "../../services/api.service";
import {SignIn} from "../../models/signIn.model";
import {SignUp} from "../../models/signUp.model";

const authAPIInstance = new HTTPTransport();

const root = '/auth'

class AuthApi extends BaseAPI {

    async signUp(data: SignUp): Promise<any> {
        return await authAPIInstance.post(`${root}/signup`, { data: data });
    };

    async signIn(data: SignIn): Promise<any> {
        return await authAPIInstance.post(`${root}/signin`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
    };

    async user(): Promise<any> {
        const response = await authAPIInstance.get(`${root}/user`, {
            credentials: 'include',
            mode: 'cors',
        });
        return response ? response : null;
    }

    async logOut(): Promise<any> {
        return await authAPIInstance.post(`${root}/logout`, {
            credentials: 'include',
            mode: 'cors'
        });
    }
}

export default AuthApi;