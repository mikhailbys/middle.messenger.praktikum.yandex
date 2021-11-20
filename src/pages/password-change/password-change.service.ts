import ProfileAPI from "../../api/profile-api";
import Router from "../../modules/router";

export type Data = {
    oldPassword: string,
    newPassword: string
}

const api = new ProfileAPI();

export const changePassword = async (data: Data, router: Router) => {
    const response = await api.password(data);
    if (response?.status === 500) {
        alert('Неизвестная ошибка');
        return false;
    }
    if (response?.status === 400) {
        alert('Неверные данные');
        return false;
    }
    return true;
}