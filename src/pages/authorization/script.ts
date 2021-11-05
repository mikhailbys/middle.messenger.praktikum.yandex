import {triggerValidateError} from "../../utils/FormValidation";
import {PASSWORD_REGEXP} from "../../utils/Masks";

import AuthPage from './authorization.view';
import Input from '../../components/input/input.component';
import Label from '../../components/label/label.component';
import Span from '../../components/span/span.component';

import {render} from "../../utils/RenderDOM";

// шаблон страницы
const authPage = new AuthPage({ attributes: {}});
render('#root', authPage);

const loginLabel = new Label({ attributes: {}});
render('.input-group', loginLabel);
const loginInput = new Input({ attributes: { type: 'text', name: 'login', id: 'login' }});
render('.input-group', loginInput);
const loginEmpty = new Span({ attributes: { class: 'hide', id: 'login-empty' }});
render('.input-group', loginEmpty);

const passwordLabel = new Label({ attributes: {}});
render('.input-group', passwordLabel);
const passwordInput = new Input({ attributes: { type: 'password', name: 'password', id: 'password' }});
render('.input-group', passwordInput);
//Пароль должен соответствовать определенному шаблону
const passwordEmpty = new Span({ attributes: { class: 'hide', id: 'password-error' }});
render('.input-group', passwordEmpty);
//Введите пароль
const passwordError = new Span({ attributes: { class: 'hide', id: 'password-empty' }});
render('.input-group', passwordError);

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

console.log('adasdas')