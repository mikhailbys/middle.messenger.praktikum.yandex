import ProfileAPI from "../../api/profile/profile.api";
import Router from "../../modules/router";
import {processResponseStatus} from "../../api/profile/profile.helpers";
import {PasswordChange} from "../../models/passwordChange.model";

const api = new ProfileAPI();

export const changePassword = async (data: PasswordChange, router: Router) => {
    const response = await api.password(data);
    processResponseStatus(response.status, router);
    return !(response.status === 500 || response.status === 400);
}