import {BaseAPI} from "./base-api";
import HTTPTransport from "../services/api";
import {processResponseStatus} from "../utils/ApiUtils";
import {SignInData} from "../pages/authorization/authorization.service";
import {SignUpData} from "../pages/registry/registry.service";

const authAPIInstance = new HTTPTransport();

const root = '/auth'

class AuthAPI extends BaseAPI {
    async signIn(data: SignInData): Promise<any> {
        const response = await authAPIInstance.post(`${root}/signin`, { data: data });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    };

    async signUp(data: SignUpData): Promise<any> {
        const response = await authAPIInstance.post(`${root}/signup`, { data: data });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    };

    async logOut(): Promise<any> {
        const response = await authAPIInstance.post(`${root}/logout`);
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    }
}

export default AuthAPI;