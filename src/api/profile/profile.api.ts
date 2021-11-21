import {BaseAPI} from "../base.api";
import HTTPTransport from "../../services/api.service";
import {PasswordChange} from "../../models/passwordChange.model";

const authAPIInstance = new HTTPTransport();

const root = '/user'

class ProfileAPI extends BaseAPI {
    async password(data: PasswordChange): Promise<any> {
        return await authAPIInstance.put(`${root}/password`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
    }
}

export default ProfileAPI;