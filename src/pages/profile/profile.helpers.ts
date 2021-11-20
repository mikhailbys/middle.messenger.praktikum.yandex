import Router from "../../modules/router";
import constants from "../../constants";
import {logOut} from "./profile.service";

export const prepareSettingsPage = (router: Router) => {

    const logoutButton = document.querySelector('#logout-button');
    logoutButton?.addEventListener('click', async (e) => {
        e.preventDefault();
        const result = await logOut();
        result && router.go(constants.routes.main);
    })
}