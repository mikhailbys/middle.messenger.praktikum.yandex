import Router from "./modules/router";

import constants from "./constants";

import AuthPage from "./pages/authorization/authorization.view";
import RegistrationPage from "./pages/registry/registry.view";
import MessagesPage from "./pages/messages/messages.view";
import SettingsPage from "./pages/profile/profile.view";

import {prepareAuthForm} from "./pages/authorization/authorization.helpers";
import {prepareRegistrationForm} from "./pages/registry/registry.helpers";
import {prepareMessagesPage} from "./pages/messages/messages.helpers";

const router = new Router('#root');
const routes = constants.routes;

router
    .use(routes.main, AuthPage)
    .use(routes.signUp, RegistrationPage)
    .use(routes.messages, MessagesPage)
    .use(routes.settings, SettingsPage)
    // todo
    .start();

router.go(routes.main);

switch (router._currentRoute?._pathname) {
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
}