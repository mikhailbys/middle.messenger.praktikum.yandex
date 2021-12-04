import AuthApi from "../../api/auth/auth.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {User} from "../../models/user.model";
import {processResponseStatus} from "../../api/profile/profile.helpers";
import Router from "../../modules/router";
import ProfileAPI from "../../api/profile/profile.api";

const api = new AuthApi();
const profileApi = new ProfileAPI();
const store = new Store();
const currentPage = constants.routes.settings;

const applyUserData = (data: User) =>
    ({
        mailValue: data.email,
        loginValue: data.login,
        nameValue: data.first_name,
        secondNameValue: data.second_name,
        chatNameValue: data.display_name,
        phoneValue: data.phone
    });

export const logOut = async (router: Router) => {
    const response = await api.logOut();
    processResponseStatus(response.status, router)
    return response?.status === 200;
};

export const getUserData = async () => {
    const response = await api.user();
    if (response && response.response) {
        // @ts-ignore
        const data = JSON.parse(response.response);
        const userData = applyUserData(data);
        store.update({
            type: 'innerText',
            props: { ...userData, id: data.id }
            }, currentPage);
    }
};

export const changeAvatar = async (data: FormData) => {
    const response = await profileApi.avatar(data);
    if (response.status === 200 && response?.response) {
        return JSON.parse(response.response).avatar;
    }
}