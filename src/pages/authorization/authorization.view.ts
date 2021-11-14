import Block from '../../modules/block';
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

const loginLabel = new Label({ innerText: 'Логин'});
const loginInput = new Input({ attributes: { type: 'text', name: 'login', id: 'login' }});
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
