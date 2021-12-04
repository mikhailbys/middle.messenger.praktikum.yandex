import Router from "../../modules/router";
import constants from "../../constants";
import {getUserData, logOut} from "./profile.service";
import {setAccess} from "../../utils/access";

export const prepareSettingsPage = (router: Router) => {
    getUserData(router);

    const passwordButton = document.querySelector('#pro-a-password');
    passwordButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        router.go(constants.routes.passwordSettings);
    });

    const profileButton = document.querySelector('#pro-a-profile');
    profileButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        router.go(constants.routes.profileSettings);
    });

    const logoutButton = document.querySelector('#logout-button');
    logoutButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        const result = await logOut(router);
        if (result) {
            setAccess(false);
            router.go(constants.routes.main);
        }
    });
}