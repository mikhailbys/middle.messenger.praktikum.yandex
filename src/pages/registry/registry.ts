import {triggerValidateError} from "../../utils/FormValidation";
import {PASSWORD_REGEXP} from "../../utils/Regexps";

const registryForm: HTMLFormElement | null = document.querySelector('#registry_form');

function validate() {
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
    document.querySelector('#login-empty')?.classList.remove('show-error');
    document.querySelector('#phone-empty')?.classList.remove('show-error');
    document.querySelector('#first-name-empty')?.classList.remove('show-error');
    document.querySelector('#second-name-empty')?.classList.remove('show-error');
    document.querySelector('#mail-empty')?.classList.remove('show-error');
    document.querySelector('#password-empty')?.classList.remove('show-error');
    document.querySelector('#password-error')?.classList.remove('show-error');
    document.querySelector('#password-repeat-empty')?.classList.remove('show-error');
    document.querySelector('#password-repeat-error')?.classList.remove('show-error');
    document.querySelector('#password-repeat-equality')?.classList.remove('show-error');

    if (login.value === '') {
        triggerValidateError(login, '#login-empty');
        result = false;
    }

    if (mail.value === '') {
        triggerValidateError(mail, '#mail-empty');
        result = false;
    }

    if (firstName.value === '') {
        triggerValidateError(firstName, '#first-name-empty');
        result = false;
    }

    if (secondName.value === '') {
        triggerValidateError(secondName, '#second-name-empty');
        result = false;
    }

    if (phone.value === '') {
        triggerValidateError(phone, '#phone-empty');
        result = false;
    }

    if (password.value === '') {
        triggerValidateError(password, '#password-empty');
        result = false;
    }

    if (passwordRepeat.value === '') {
        triggerValidateError(passwordRepeat, '#password-repeat-empty');
        result = false;
    }

    if (password.value !== '' && !password.value.match(PASSWORD_REGEXP)) {
        triggerValidateError(password, '#password-error');
        result = false;
    }

    if (passwordRepeat.value !== '' && !passwordRepeat.value.match(PASSWORD_REGEXP)) {
        triggerValidateError(passwordRepeat, '#password-repeat-error');
        result = false;
    }

    if (password.value !== ''
        && passwordRepeat !== ''
        && password.value.match(PASSWORD_REGEXP)
        && passwordRepeat.value.match(PASSWORD_REGEXP)
        && password.value !== passwordRepeat.value) {
        triggerValidateError(passwordRepeat, '#password-repeat-equality');
        result = false;
    }

    return result;
}

if (registryForm) {
    registryForm.onsubmit = (e) => {
        const formData = new FormData(registryForm);

        const login = formData.get('login');
        const mail = formData.get('mail');
        const firstName = formData.get('first_name');
        const secondName = formData.get('second_name');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const passwordRepeat = formData.get('password-repeat');

        validate() ? console.log({
            login,
            password,
            passwordRepeat,
            mail,
            firstName,
            secondName,
            phone,
        }) : null;

        e.preventDefault();
    };
}
