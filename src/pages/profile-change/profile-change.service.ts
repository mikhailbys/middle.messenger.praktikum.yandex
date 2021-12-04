import AuthApi from "../../api/auth/auth.api";
import ProfileApi from "../../api/profile/profile.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {User} from "../../models/user.model";
import ProfileAPI from "../../api/profile/profile.api";
import {PasswordChange} from "../../models/passwordChange.model";
import Router from "../../modules/router";
import {processResponseStatus} from "../../api/profile/profile.helpers";

const api = new AuthApi();
const profileApi = new ProfileApi();
const store = new Store();
const currentPage = constants.routes.profileSettings;

const applyUserData = (data: User) =>
    ({
        mailInput: data.email,
        loginInput: data.login,
        nameInput: data.first_name,
        secondNameInput: data.second_name,
        chatNameInput: data.display_name,
        phoneInput: data.phone
    });

export const getUserData = async () => {
    const response = await api.user();
    if (response && response.response) {
        // @ts-ignore
        const data = JSON.parse(response.response);
        const userData = applyUserData(data);
        store.update({
            type: 'value',
            props: userData
        }, currentPage);
    }
};

export const changeProfileData = async (data: Omit<User, 'id'>, router: Router) => {
        const response = await profileApi.profile(data);
        processResponseStatus(response.status, router);
        if (response && response.response) {
            // @ts-ignore
            const data = JSON.parse(response.response);
            const userData = applyUserData(data);
            store.update({
                type: 'value',
                props: userData
            }, currentPage);
        }
}