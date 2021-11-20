import AuthAPI from "../../api/auth-api";

const api = new AuthAPI();

export const logOut = async () => {
    const response = await api.logOut();
    // logout store
    return response?.status === 200;
}