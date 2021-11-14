import {triggerValidateError} from "../../utils/FormValidation";
import {PASSWORD_REGEXP} from "../../utils/Masks";

export const addFormSubmitEvent = (authForm: HTMLFormElement) => {
    authForm.onsubmit = (event) => {
        const formData = new FormData(authForm);

        const login = formData.get('login');
        const password = formData.get('password');

        event.preventDefault();

        validateForm(authForm) ? console.log({login, password}) : null;
    }
}

export const validateForm = (authForm: HTMLFormElement) => {
    let result = true;

    // select inputs
    const login = authForm?.login;
    const password = authForm?.password;

    // hide input errors
    password.classList.remove('input-error');
    login.classList.remove('input-error');

    // hide clues
    document.querySelector('#login-empty')?.classList.remove('show-error');
    document.querySelector('#password-empty')?.classList.remove('show-error');
    document.querySelector('#password-error')?.classList.remove('show-error');

    if (login.value === '') {
        triggerValidateError(login, '#login-empty');
        result = false;
    }

    if (password.value === '') {
        triggerValidateError(password, '#password-empty');
        result = false;
    }

    if (password.value !== '' && !password.value.match(PASSWORD_REGEXP)) {
        triggerValidateError(password, '#password-error');
        result = false;
    }

    return result;
}