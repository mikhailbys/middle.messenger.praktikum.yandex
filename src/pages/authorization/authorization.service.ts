import AuthApi from "../../api/auth/auth.api";
import Store from "../../modules/store";
import constants from "../../constants";
import Router from "../../modules/router";
import {setAccess} from "../../utils/access";
import {DEFAULT_PARAMS, SignIn} from "../../models/signIn.model";
import {processResponseStatus} from "../../api/auth/auth.helpers";

const api = new AuthApi();
const store = new Store();
const currentPage = constants.routes.main;
const messagePage = constants.routes.messages;

const setUserId = async () => {
    const response = await api.user();
    if (response && response.response) {
        // @ts-ignore
        const data = JSON.parse(response.response);
        store.updateNoRender({
            userId: data.id
        }, constants.routes.profileSettings);
    }
};

export const signIn = async (data: SignIn, router: Router) => {
    const response = await api.signIn(data);
    processResponseStatus(response.status, router);
    if (response.status === 400 || response.status === 401) {
        store.update({
            type: 'value',
            props: DEFAULT_PARAMS
        }, currentPage);
    }
    if (response?.status === 200) {
        setAccess(true);
        await setUserId();
        debugger
        router.go(messagePage);
    }
}