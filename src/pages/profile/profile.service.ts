import AuthAPI from "../../api/auth-api";
import Store from "../../modules/store";
import constants from "../../constants";

const api = new AuthAPI();
const store = new Store();
const currentPage = constants.routes.settings;

type UserData = {
    id: string,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string
}

const applyUserData = (data: UserData) =>
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
}

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
}