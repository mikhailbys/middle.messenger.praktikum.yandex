import Router from "./modules/router";
import Store from "./modules/store";

import constants from "./constants";

import AuthPage from "./pages/authorization/authorization.view";
import RegistrationPage from "./pages/registry/registry.view";
import MessagesPage from "./pages/messages/messages.view";
import SettingsPage from "./pages/profile/profile.view";
import NotFoundPage from "./pages/404/404.view";
import InternalPage from "./pages/500/500.view";
import AccessPage from "./pages/401/401.view";
import PasswordSettingsPage from "./pages/password-change/password-change.view";
import ProfileSettingsPage from "./pages/profile-change/profile-change.view";

const routes = constants.routes;
const router = new Router('#root');
const store = new Store();

store.init([routes.main, routes.settings, routes.profileSettings, routes.messages], router.routes);

router
    .use(routes.main, AuthPage)
    .use(routes.signUp, RegistrationPage)
    .use(routes.messages, MessagesPage)
    .use(routes.settings, SettingsPage)
    .use(routes.passwordSettings, PasswordSettingsPage)
    .use(routes.profileSettings, ProfileSettingsPage)
    .use(routes.accessError, AccessPage)
    .use(routes.internalError, InternalPage)
    .use(routes.notFound, NotFoundPage)
    .start();