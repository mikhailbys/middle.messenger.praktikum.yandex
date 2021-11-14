import {triggerValidateError} from '../../utils/FormValidation';
import {FIO_MASK, LOGIN_MASK, PASSWORD_REGEXP, PHONE_MASK} from '../../utils/Masks';
import {render} from '../../utils/RenderDOM';

import RegistryPage from "./registry.view";
import Input from '../../components/input/input.component';
import Label from '../../components/label/label.component';
import Span from '../../components/span/span.component';
import Button from '../../components/button/button.component';

import constants from "../../constants";
import {addFocusEventOnInput} from "../../utils/FormEvents";

// шаблон страницы
const registryPage = new RegistryPage();

const mailLabel = new Label({ innerText: 'Почта'});
const mailInput = new Input({ attributes: { type: 'email', name: 'mail', id: 'mail' }});
const mailEmpty = new Span(
    { attributes: { class: 'hide', id: 'mail-empty' }, innerText: constants.clues.enterMail});

const loginLabel = new Label({ innerText: 'Логин'});
const loginInput = new Input({ attributes: { type: 'text', name: 'login', id: 'login' }});
const loginEmpty = new Span(
    { attributes: { class: 'hide', id: 'login-empty' }, innerText: constants.clues.enterLogin});
const loginError = new Span(
    { attributes: { class: 'hide', id: 'login-error' }, innerText: constants.clues.loginRule});

const firstNameLabel = new Label({ innerText: 'Имя'});
const firstNameInput = new Input({ attributes: { type: 'text', name: 'firstName', id: 'firstName' }});
const firstNameEmpty = new Span(
    { attributes: { class: 'hide', id: 'first-name-empty' }, innerText: constants.clues.enterFirstName});
const firstNameError = new Span(
    { attributes: { class: 'hide', id: 'first-name-error' }, innerText: constants.clues.nameRule});

const secondNameLabel = new Label({ innerText: 'Фамилия'});
const secondNameInput = new Input({ attributes: { type: 'text', name: 'secondName', id: 'secondName' }});
const secondNameEmpty = new Span(
    { attributes: { class: 'hide', id: 'second-name-empty' }, innerText: constants.clues.enterSecondName});
const secondNameError = new Span(
    { attributes: { class: 'hide', id: 'second-name-error' }, innerText: constants.clues.nameRule});

const phoneLabel = new Label({ innerText: 'Телефон'});
const phoneInput = new Input({ attributes: { type: 'tel', name: 'phone', id: 'phone' }});
const phoneEmpty = new Span(
    { attributes: { class: 'hide', id: 'phone-empty' }, innerText: constants.clues.enterPhone});
const phoneError = new Span(
    { attributes: { class: 'hide', id: 'phone-error' }, innerText: constants.clues.phoneRule});

const passwordLabel = new Label({ innerText: 'Пароль'});
const passwordInput = new Input({ attributes: { type: 'password', name: 'password', id: 'password' }});
const passwordEmpty = new Span(
    { attributes: { class: 'hide', id: 'password-empty' }, innerText: constants.clues.enterPassword});
const passwordError = new Span(
    { attributes: { class: 'hide', id: 'password-error' }, innerText: constants.clues.passwordRule});

const passwordRepeatLabel = new Label({ innerText: 'Пароль (еще раз)'});
const passwordRepeatInput = new Input({ attributes: { type: 'password', name: 'passwordRepeat', id: 'passwordRepeat' }});
const passwordRepeatEmpty = new Span(
    { attributes: { class: 'hide', id: 'password-repeat-empty' }, innerText: constants.clues.repeatPassword});
const passwordRepeatError = new Span(
    { attributes: { class: 'hide', id: 'password-repeat-error' }, innerText: constants.clues.passwordRule});
const passwordRepeatEquality = new Span(
    { attributes: { class: 'hide', id: 'password-repeat-equality' }, innerText: constants.clues.passwordsNotEqual});

const registrationButton = new Button({ innerText: 'Зарегистрироваться', attributes: { class: 'enter', type: 'submit' } });


/*render('#root', registryPage);

render('.registry_form', mailLabel);
render('.registry_form', mailInput);
render('.registry_form', mailEmpty);
render('.registry_form', loginLabel);
render('.registry_form', loginInput);
render('.registry_form', loginEmpty);
render('.registry_form', loginError);
render('.registry_form', firstNameLabel);
render('.registry_form', firstNameInput);
render('.registry_form', firstNameEmpty);
render('.registry_form', firstNameError);
render('.registry_form', secondNameLabel);
render('.registry_form', secondNameInput);
render('.registry_form', secondNameEmpty);
render('.registry_form', secondNameError);
render('.registry_form', phoneLabel);
render('.registry_form', phoneInput);
render('.registry_form', phoneEmpty);
render('.registry_form', phoneError);
render('.registry_form', passwordLabel);
render('.registry_form', passwordInput);
render('.registry_form', passwordEmpty);
render('.registry_form', passwordError);
render('.registry_form', passwordRepeatLabel);
render('.registry_form', passwordRepeatInput);
render('.registry_form', passwordRepeatEmpty);
render('.registry_form', passwordRepeatError);
render('.registry_form', passwordRepeatEquality);
render('.submit-container', registrationButton);*/

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
    document.querySelector('#first-name-error')?.classList.remove('show-error');
    document.querySelector('#second-name-error')?.classList.remove('show-error');
    document.querySelector('#phone-error')?.classList.remove('show-error');
    document.querySelector('#login-error')?.classList.remove('show-error');

    if (login.value === '') {
        triggerValidateError(login, '#login-empty');
        result = false;
    }

    if (login.value !== '' && !login.value.match(LOGIN_MASK)) {
        triggerValidateError(login, '#login-error');
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

    if (firstName.value !== '' && !firstName.value.match(FIO_MASK)) {
        triggerValidateError(firstName, '#first-name-error');
        result = false;
    }

    if (secondName.value === '') {
        triggerValidateError(secondName, '#second-name-empty');
        result = false;
    }

    if (secondName.value !== '' && !secondName.value.match(FIO_MASK)) {
        triggerValidateError(secondName, '#second-name-error');
        result = false;
    }

    if (phone.value === '') {
        triggerValidateError(phone, '#phone-empty');
        result = false;
    }

    if (phone.value !== '' && !phone.value.match(PHONE_MASK)) {
        triggerValidateError(phone, '#phone-error');
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

function onSubmit(event: Event) {
    if (registryForm) {
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

            event.preventDefault();
        }
}

if (registryForm) {
    registryForm.onsubmit = onSubmit;
}