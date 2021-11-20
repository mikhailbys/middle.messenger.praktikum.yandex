import {BaseAPI} from "./base-api";
import HTTPTransport from "../services/api.service";
import {Data} from "../pages/password-change/password-change.service";

const authAPIInstance = new HTTPTransport();

const root = '/user'

class ProfileAPI extends BaseAPI {
    async password(data: Data): Promise<any> {
        const response = await authAPIInstance.put(`${root}/password`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
        return response;
    }
}

export default ProfileAPI;