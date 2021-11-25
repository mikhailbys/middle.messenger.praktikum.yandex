import {BaseAPI} from "../base.api";
import HTTPTransport from "../../modules/api/api.service";
import {PasswordChange} from "../../models/passwordChange.model";
import {User} from "../../models/user.model";

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

    async profile(data: Omit<User, 'id'>): Promise<any> {
        return await authAPIInstance.put(`${root}/profile`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
    }
}

export default ProfileAPI;