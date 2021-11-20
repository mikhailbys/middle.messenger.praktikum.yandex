import Router from "../../modules/router";
import constants from "../../constants";
import {getUserData, logOut} from "./profile.service";
import {setAccess} from "../../utils/Access";

export const prepareSettingsPage = (router: Router) => {
    getUserData();

    const passwordButton = document.querySelector('#pro-a-password');
    passwordButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        router.go(constants.routes.passwordSettings);
    })

    const logoutButton = document.querySelector('#logout-button');
    logoutButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        const result = await logOut();
        if (result) {
            setAccess(false);
            router.go(constants.routes.main);
        }
    })
}