import {BaseAPI} from "../base.api";
import HTTPTransport from "../../modules/api/api.service";
import {PasswordChange} from "../../models/passwordChange.model";
import {User} from "../../models/user.model";

const api = new HTTPTransport();

const root = '/user'

class ProfileAPI extends BaseAPI {
    async password(data: PasswordChange): Promise<any> {
        return await api.put(`${root}/password`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
    };

    async profile(data: Omit<User, 'id'>): Promise<any> {
        return await api.put(`${root}/profile`, {
            credentials: 'include',
            mode: 'cors',
            data: data
        });
    };

    async avatar(data: FormData): Promise<any> {
        return await api.put(`${root}/profile/avatar`,
            {
                data: data.get('avatar'),
                credentials: 'include'
            });
    };
}

export default ProfileAPI;