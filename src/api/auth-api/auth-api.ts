import {BaseAPI} from "../base-api";
import HTTPTransport from "../../services/api";
import {processResponseStatus} from "../../utils/ApiUtils";

const authAPIInstance = new HTTPTransport();

const root = '/auth'

class AuthAPI extends BaseAPI {
    async request(data: any): Promise<any> {
        const response = await authAPIInstance.post(`${root}/signin`, { data: data });
        const message = processResponseStatus(response);
        if (message) {
            alert(message);
        }
        return response;
    }
}

export default AuthAPI;