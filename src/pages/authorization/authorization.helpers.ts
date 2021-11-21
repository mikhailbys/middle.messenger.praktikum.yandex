import {PASSWORD_REGEXP} from "../../utils/masks";
import {addFocusEventOnInputBySelectors, triggerValidateErrorBySelectors} from "../../utils/formEvents";
import Router from "../../modules/router";
import constants from "../../constants";
import {signIn} from "./authorization.service";

const AUTH_ERROR_SELECTORS = ['auth-input-error', 'auth-show-error'];
const ERROR_IDS = ['#auth-login-empty', '#auth-password-empty', '#auth-password-error'];

const addFormSubmitEvent = (authForm: HTMLFormElement, router: Router) => {
    authForm.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(authForm);
        const login = formData.get('login');
        const password = formData.get('password');

        if (validateForm(authForm)) {
            signIn({
                login: login as string,
                password: password as string
            }, router)
        }
    }
}

const validateForm = (authForm: HTMLFormElement) => {
    let result = true;
    // select inputs
    const login = authForm?.login;
    const password = authForm?.password;
    // hide input errors
    password.classList.remove('auth-input-error');
    login.classList.remove('auth-input-error');
    // hide clues
    ERROR_IDS.forEach(id => {
        document.querySelector(id)?.classList.remove('auth-show-error');
    });
    // check
    if (login.value === '') {
        triggerValidateErrorBySelectors(login, '#auth-login-empty', AUTH_ERROR_SELECTORS);
        result = false;
    }
    if (password.value === '') {
        triggerValidateErrorBySelectors(password, '#auth-password-empty', AUTH_ERROR_SELECTORS);
        result = false;
    }
    if (password.value !== '' && !password.value.match(PASSWORD_REGEXP)) {
        triggerValidateErrorBySelectors(password, '#auth-password-error', AUTH_ERROR_SELECTORS);
        result = false;
    }
    return result;
}

export const prepareAuthForm = (authForm: HTMLFormElement, router: Router) => {
    addFocusEventOnInputBySelectors(
        authForm?.login, ['auth-login-empty'], AUTH_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(
        authForm?.password, ['auth-password-empty', 'auth-password-error'], AUTH_ERROR_SELECTORS);

    if (authForm) {
        addFormSubmitEvent(authForm, router);
    }

    document.querySelector('#reg')?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.signUp)
    });

    document.querySelector('#chat')?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.messages);
    })
}
