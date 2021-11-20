import constants from "../constants";

import {prepareAuthForm} from "../pages/authorization/authorization.helpers";
import {prepareRegistrationForm} from "../pages/registry/registry.helpers";
import {prepareMessagesPage} from "../pages/messages/messages.helpers";

import Router from "../modules/router";
import {prepareSettingsPage} from "../pages/profile/profile.helpers";
import {preparePasswordSettingsPage} from "../pages/password-change/password-change.helpers";

const routes = constants.routes;

export const callPageScript = (pathname: string, router: Router): void => {
    switch (pathname) {
        case (routes.main):
            const authForm: HTMLFormElement | null = document.querySelector('#auth_form');
            if (authForm) prepareAuthForm(authForm, router);
            break;
        case (routes.signUp):
            const registryForm: HTMLFormElement | null = document.querySelector('#registry_form');
            if (registryForm) prepareRegistrationForm(registryForm, router);
            break;
        case (routes.messages):
            prepareMessagesPage(router);
            break;
        case (routes.settings):
            prepareSettingsPage(router);
            break;
        case (routes.passwordSettings):
            preparePasswordSettingsPage(router);
            break;
    }
};