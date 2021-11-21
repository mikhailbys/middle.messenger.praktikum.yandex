import AuthApi from "../../api/auth/auth.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {User} from "../../models/user.model";

const api = new AuthApi();
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

export const logOut = async () => {
    const response = await api.logOut();
    return response?.status === 200;
};

export const getUserData = async () => {
    const response = await api.user();
    // @ts-ignore
    if (response && response.response) {
        // @ts-ignore
        const data = JSON.parse(response?.response);
        const userData = applyUserData(data);
        store.update({
            type: 'innerText',
            props: { ...userData }
            }, currentPage);
    }
};