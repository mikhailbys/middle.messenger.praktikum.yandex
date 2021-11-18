import {FIO_MASK, LOGIN_MASK, PASSWORD_REGEXP, PHONE_MASK} from "../../utils/Masks";
import Router from "../../modules/router";
import {
    addFocusEventOnInputBySelectors,
    triggerValidateErrorBySelectors
} from "../../utils/FormEvents";
import constants from "../../constants";
import {signUp} from "./registry.service";

const REG_ERROR_SELECTORS = ['reg-input-error', 'reg-show-error'];
const ERROR_IDS = [
    '#reg-login-empty', '#reg-phone-empty', '#reg-first-name-empty',
    '#reg-second-name-empty', '#reg-mail-empty', '#reg-password-empty',
    '#reg-password-error', '#reg-password-repeat-empty', '#reg-password-repeat-error',
    '#reg-password-repeat-equality', '#reg-first-name-error', '#reg-second-name-error',
    '#reg-phone-error', '#reg-login-error',
];

export const addFormSubmitEvent = (registryForm: HTMLFormElement, router: Router) => {
    registryForm.onsubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(registryForm);
        const login = formData.get('login');
        const mail = formData.get('mail');
        const firstName = formData.get('first_name');
        const secondName = formData.get('second_name');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const passwordRepeat = formData.get('password-repeat');

        console.log({
            login,
            password,
            passwordRepeat,
            mail,
            firstName,
            secondName,
            phone,
        });

        // todo
        /*if (validate(registryForm)) {
            signUp({
                login: login!,
                password,
                passwordRepeat,
                mail,
                firstName,
                secondName,
                phone,
            }, router);
        }*/
    }
}

const validate = (registryForm: HTMLFormElement) => {
    let result = true;
    // select inputs
    const login = registryForm?.login;
    const password = registryForm?.password;
    const passwordRepeat = registryForm?.passwordRepeat;
    const mail = registryForm?.mail;
    const firstName = registryForm?.firstName;
    const phone = registryForm?.phone;
    const secondName = registryForm?.secondName;
    // hide input errors
    password.classList.remove('input-error');
    passwordRepeat.classList.remove('input-error');
    login.classList.remove('input-error');
    firstName.classList.remove('input-error');
    secondName.classList.remove('input-error');
    mail.classList.remove('input-error');
    phone.classList.remove('input-error');
    // hide clues
    ERROR_IDS.forEach(id => {
        document.querySelector(id)?.classList.remove('show-error');
    });
    // check values
    if (login.value === '') {
        triggerValidateErrorBySelectors(login, '#reg-login-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (login.value !== '' && !login.value.match(LOGIN_MASK)) {
        triggerValidateErrorBySelectors(login, '#reg-login-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (mail.value === '') {
        triggerValidateErrorBySelectors(mail, '#reg-mail-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (firstName.value === '') {
        triggerValidateErrorBySelectors(firstName, '#reg-first-name-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (firstName.value !== '' && !firstName.value.match(FIO_MASK)) {
        triggerValidateErrorBySelectors(firstName, '#reg-first-name-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (secondName.value === '') {
        triggerValidateErrorBySelectors(secondName, '#reg-second-name-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (secondName.value !== '' && !secondName.value.match(FIO_MASK)) {
        triggerValidateErrorBySelectors(secondName, '#reg-second-name-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (phone.value === '') {
        triggerValidateErrorBySelectors(phone, '#reg-phone-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (phone.value !== '' && !phone.value.match(PHONE_MASK)) {
        triggerValidateErrorBySelectors(phone, '#reg-phone-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (password.value === '') {
        triggerValidateErrorBySelectors(password, '#reg-password-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (passwordRepeat.value === '') {
        triggerValidateErrorBySelectors(passwordRepeat, '#reg-password-repeat-empty', REG_ERROR_SELECTORS);
        result = false;
    }
    if (password.value !== '' && !password.value.match(PASSWORD_REGEXP)) {
        triggerValidateErrorBySelectors(password, '#reg-password-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (passwordRepeat.value !== '' && !passwordRepeat.value.match(PASSWORD_REGEXP)) {
        triggerValidateErrorBySelectors(passwordRepeat, '#reg-password-repeat-error', REG_ERROR_SELECTORS);
        result = false;
    }
    if (password.value !== ''
        && passwordRepeat !== ''
        && password.value.match(PASSWORD_REGEXP)
        && passwordRepeat.value.match(PASSWORD_REGEXP)
        && password.value !== passwordRepeat.value) {
        triggerValidateErrorBySelectors(passwordRepeat, '#password-repeat-equality', REG_ERROR_SELECTORS);
        result = false;
    }
    return result;
}

export const prepareRegistrationForm = (registryForm: HTMLFormElement, router: Router) => {
    // события на фокус
    addFocusEventOnInputBySelectors(registryForm?.login, ['reg-login-empty', 'reg-login-error'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.mail, ['reg-mail-empty'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.firstName, ['reg-first-name-empty', 'reg-first-name-error'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.secondName, ['reg-second-name-empty', 'reg-second-name-error'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.phone, ['reg-phone-empty', 'reg-phone-error'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.password, ['reg-password-empty', 'reg-password-error'], REG_ERROR_SELECTORS);
    addFocusEventOnInputBySelectors(registryForm?.passwordRepeat,
        ['reg-password-repeat-empty', 'reg-password-repeat-error', 'reg-password-repeat-equality'], REG_ERROR_SELECTORS);

    if(registryForm) {
        addFormSubmitEvent(registryForm, router);
    }

    document.querySelector('#enterHref')?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.main)
    })
}