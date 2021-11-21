import AuthApi from "../../api/auth/auth.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {User} from "../../models/user.model";

const api = new AuthApi();
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
            props: { ...userData }
        }, currentPage);
    }
};