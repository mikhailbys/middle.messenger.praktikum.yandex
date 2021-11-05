import {triggerValidateError} from "../../utils/FormValidation";
import {PASSWORD_REGEXP} from '../../utils/Masks';

import AuthPage from './authorization.view';
import Input from '../../components/input/input.component';
import Label from '../../components/label/label.component';
import Span from '../../components/span/span.component';
import Button from '../../components/button/button.component';

import {render} from '../../utils/RenderDOM';
import constants from "../../constants";

// шаблон страницы
const authPage = new AuthPage();

const loginLabel = new Label(
    { innerText: 'Логин'});
const loginInput = new Input(
    { attributes: { type: 'text', name: 'login', id: 'login' }});
const loginEmpty = new Span(
    { attributes: { class: 'hide', id: 'login-empty' }, innerText: constants.clues.enterLogin});
const passwordLabel = new Label({ innerText: 'Пароль'});
const passwordInput = new Input(
    { attributes: { type: 'password', name: 'password', id: 'password' }});
const passwordError = new Span(
    { attributes: { class: 'hide', id: 'password-error' }, innerText: constants.clues.passwordRule });
const passwordEmpty = new Span(
    { attributes: { class: 'hide', id: 'password-empty' }, innerText: constants.clues.enterPassword });

const authButton = new Button({ innerText: 'Войти', attributes: { class: 'enter' } });

render('#root', authPage);
render('.input-group', loginLabel);
render('.input-group', loginInput);
render('.input-group', loginEmpty);
render('.input-group', passwordLabel);
render('.input-group', passwordInput);
render('.input-group', passwordEmpty);
render('.input-group', passwordError);
render('.button-group', authButton);

// Работа с формой
const authForm: HTMLFormElement | null = document.querySelector('#auth_form');

function validate() {
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

function onSubmit(event: Event) {
    if(authForm) {
        const formData = new FormData(authForm);

        const login = formData.get('login');
        const password = formData.get('password');

        event.preventDefault();

        validate() ? console.log({login, password}) : null;
    }
}

if (authForm) {
    authForm.onsubmit = onSubmit;
}