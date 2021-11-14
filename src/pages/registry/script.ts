import {addFocusEventOnInput} from "../../utils/FormEvents";
import {addFormSubmitEvent} from "./registry.helpers";
import Router from "../../modules/router";

// Работа с формой
const registryForm: HTMLFormElement | null = document.querySelector('#registry_form');

// события на фокус
addFocusEventOnInput(registryForm?.login, ['login-empty', 'login-error']);
addFocusEventOnInput(registryForm?.mail, ['mail-empty']);
addFocusEventOnInput(registryForm?.firstName, ['first-name-empty', 'first-name-error']);
addFocusEventOnInput(registryForm?.secondName, ['second-name-empty', 'second-name-error']);
addFocusEventOnInput(registryForm?.phone, ['phone-empty', 'phone-error']);
addFocusEventOnInput(registryForm?.password, ['password-empty', 'password-error']);
addFocusEventOnInput(registryForm?.passwordRepeat,
    ['password-repeat-empty', 'password-repeat-error', 'password-repeat-equality']);

if (registryForm) {
    addFormSubmitEvent(registryForm);
}

const router = new Router('#root');
//enterHref
const authHref = document.querySelector('#enterHref');
authHref?.addEventListener('click', (e) => {
    e.preventDefault();
    router.go('/')
})
