import Router from "./modules/router";
import AuthPage from "./pages/authorization/authorization.view";
import RegistrationPage from "./pages/registry/registry.view";
import {prepareAuthForm} from "./pages/authorization/authorization.helpers";
import {prepareRegistrationForm} from "./pages/registry/registry.helpers";

const router = new Router('#root');

router
    .use('/', AuthPage)
    .use('/sign-up', RegistrationPage)
    // todo
    .start();

router.go('/auth');

const authForm: HTMLFormElement | null = document.querySelector('#auth_form');
const registryForm: HTMLFormElement | null = document.querySelector('#registry_form');

if (authForm) prepareAuthForm(authForm, router);
if (registryForm) prepareRegistrationForm(registryForm, router);