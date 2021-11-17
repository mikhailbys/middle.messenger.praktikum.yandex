import Block from '../../modules/block';
import './authorization.styles.scss';
// @ts-ignore
import templateCompile from './authorization.template.pug';
import Label from "../../components/label";
import Input from "../../components/input";
import Span from "../../components/Span";
import Button from "../../components/Button";
import constants from "../../constants";

interface Props {
    templateBase: boolean
}

export const AUTH_PAGE = 'AUTH_PAGE';

const loginLabel = new Label({
        attributes: { class: 'auth-label'},
        innerText: 'Логин'
});
const passwordLabel = new Label({
    attributes: { class: 'auth-label'},
    innerText: 'Пароль'
});

const loginInput = new Input({
    attributes: { type: 'text', name: 'login', id: 'auth-login', class: 'auth-input'}
});
const passwordInput = new Input({
    attributes: { type: 'password', name: 'password', id: 'auth-password', class: 'auth-input' }
});

const loginEmpty = new Span({
    attributes: { class: 'auth-hide', id: 'auth-login-empty' },
    innerText: constants.clues.enterLogin
});
const passwordError = new Span({
    attributes: { class: 'auth-hide', id: 'auth-password-error' },
    innerText: constants.clues.passwordRule
});
const passwordEmpty = new Span({
    attributes: { class: 'auth-hide', id: 'auth-password-empty' },
    innerText: constants.clues.enterPassword
});

const authButton = new Button({
    innerText: 'Войти',
    attributes: { class: 'auth-button' }
});

class Page extends Block {
    constructor(
        props: Props = { templateBase: true },
        children = {
            loginLabel: loginLabel,
            loginInput: loginInput,
            loginEmpty: loginEmpty,
            passwordLabel: passwordLabel,
            passwordInput:passwordInput,
            passwordError: passwordError,
            passwordEmpty: passwordEmpty,
            authButton: authButton
    }) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
