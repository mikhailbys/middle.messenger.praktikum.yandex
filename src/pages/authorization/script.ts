import AuthPage from './authorization.view';
import RegistrationPage from '../registry/registry.view';

import {addFocusEventOnInput} from "../../utils/FormEvents";
import {addFormSubmitEvent} from "./authorization.helpers";
import Router from "../../modules/router";

const router = new Router('#root');

router
    .use('/', AuthPage)
    .use('/sign-up', RegistrationPage)
    // todo
    .start();

router.go('/auth');

const registrationHref = document.querySelector('#reg');
registrationHref?.addEventListener('click', (e) => {
    e.preventDefault();
    router.go('/sign-up')
})

// Работа с формой
const authForm: HTMLFormElement | null = document.querySelector('#auth_form');

addFocusEventOnInput(authForm?.login, ['login-empty']);
addFocusEventOnInput(authForm?.password, ['password-empty', 'password-error']);

if (authForm) {
    addFormSubmitEvent(authForm);
}
