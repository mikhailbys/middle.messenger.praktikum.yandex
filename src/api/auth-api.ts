import {BaseAPI} from "./base-api";
import HTTPTransport from "../services/api.service";
import {processResponseStatus} from "../utils/ApiUtils";
import {SignInData} from "../pages/authorization/authorization.service";
import {SignUpData} from "../pages/registry/registry.service";

const authAPIInstance = new HTTPTransport();

const root = '/auth'

class AuthAPI extends BaseAPI {

    async signUp(data: SignUpData): Promise<any> {
        const response = await authAPIInstance.post(`${root}/signup`, { data: data });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    };

    async signIn(data: SignInData): Promise<any> {
        const response = await authAPIInstance.post(`${root}/signin`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    };

    async user(): Promise<any> {
        const response = await authAPIInstance.get(`${root}/user`, {
            credentials: 'include',
            mode: 'cors',
        });
        return response ? response : null;
    }

    async logOut(): Promise<any> {
        const response = await authAPIInstance.post(`${root}/logout`, {
            credentials: 'include',
            mode: 'cors'
        });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    }
}

export default AuthAPI;