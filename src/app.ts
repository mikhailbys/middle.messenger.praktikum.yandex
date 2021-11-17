import Router from "./modules/router";

import constants from "./constants";

import AuthPage, {AUTH_PAGE} from "./pages/authorization/authorization.view";
import RegistrationPage from "./pages/registry/registry.view";
import MessagesPage from "./pages/messages/messages.view";
import SettingsPage from "./pages/profile/profile.view";
import Store from "./modules/store";

const routes = constants.routes;

const router = new Router('#root');
const store = new Store();

store.init([AUTH_PAGE]);

router
    .use(routes.main, AuthPage)
    .use(routes.signUp, RegistrationPage)
    .use(routes.messages, MessagesPage)
    .use(routes.settings, SettingsPage)
    // todo
    .start();

router.go(routes.main);