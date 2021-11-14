import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './registry.template.pug';
import Label from "../../components/label";
import Input from "../../components/input";
import Span from "../../components/span/span.component";
import constants from "../../constants";
import Button from "../../components/button";

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

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = {
            mailLabel: mailLabel,
            mailInput: mailInput,
            mailEmpty: mailEmpty,
            loginLabel: loginLabel,
            loginInput: loginInput,
            loginEmpty: loginEmpty,
            loginError: loginError,
            firstNameLabel: firstNameLabel,
            firstNameInput: firstNameInput,
            firstNameEmpty: firstNameEmpty,
            firstNameError: firstNameError,
            secondNameLabel: secondNameLabel,
            secondNameInput: secondNameInput,
            secondNameEmpty: secondNameEmpty,
            secondNameError: secondNameError,
            phoneLabel: phoneLabel,
            phoneInput: phoneInput,
            phoneEmpty: phoneEmpty,
            phoneError: phoneError,
            passwordLabel: passwordLabel,
            passwordInput: passwordInput,
            passwordEmpty: passwordEmpty,
            passwordError: passwordError,
            passwordRepeatLabel: passwordRepeatLabel,
            passwordRepeatInput: passwordRepeatInput,
            passwordRepeatEmpty: passwordRepeatEmpty,
            passwordRepeatError: passwordRepeatError,
            passwordRepeatEquality: passwordRepeatEquality,
            registrationButton: registrationButton
        }
    ) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
