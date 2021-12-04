import Label from "../../components/label";
import Input from "../../components/input";
import Span from "../../components/span/span.component";
import constants from "../../constants";
import Button from "../../components/button";

export const initializeInnerComponents = () => {

    const mailLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Почта'});
    const loginLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Логин'});
    const firstNameLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Имя'});
    const secondNameLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Фамилия'});
    const phoneLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Телефон'});
    const passwordLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Пароль'});
    const passwordRepeatLabel = new Label({ attributes: { class: 'reg-label'}, innerText: 'Пароль (еще раз)'});

    const mailInput = new Input({
        attributes: { type: 'email', name: 'mail', id: 'mail', class:'reg-input'}});
    const loginInput = new Input({
        attributes: { type: 'text', name: 'login', id: 'login', class:'reg-input'}});
    const firstNameInput = new Input({
        attributes: { type: 'text', name: 'firstName', id: 'firstName', class:'reg-input' }});
    const secondNameInput = new Input({
        attributes: { type: 'text', name: 'secondName', id: 'secondName', class:'reg-input' }});
    const phoneInput = new Input({
        attributes: { type: 'tel', name: 'phone', id: 'phone', class:'reg-input' }});
    const passwordInput = new Input({
        attributes: { type: 'password', name: 'password', id: 'password', class:'reg-input' }});
    const passwordRepeatInput = new Input({
        attributes: { type: 'password', name: 'passwordRepeat', id: 'passwordRepeat', class:'reg-input' }});


    const mailEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-mail-empty' }, innerText: constants.clues.enterMail});
    const loginEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-login-empty' }, innerText: constants.clues.enterLogin});
    const loginError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-login-error' }, innerText: constants.clues.loginRule});
    const firstNameEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-first-name-empty' }, innerText: constants.clues.enterFirstName});
    const firstNameError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-first-name-error' }, innerText: constants.clues.nameRule});
    const secondNameEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-second-name-empty' }, innerText: constants.clues.enterSecondName});
    const secondNameError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-second-name-error' }, innerText: constants.clues.nameRule});
    const phoneEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-phone-empty' }, innerText: constants.clues.enterPhone});
    const phoneError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-phone-error' }, innerText: constants.clues.phoneRule});
    const passwordEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-password-empty' }, innerText: constants.clues.enterPassword});
    const passwordError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-password-error' }, innerText: constants.clues.passwordRule});
    const passwordRepeatEmpty = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-password-repeat-empty' }, innerText: constants.clues.repeatPassword});
    const passwordRepeatError = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-password-repeat-error' }, innerText: constants.clues.passwordRule});
    const passwordRepeatEquality = new Span(
        { attributes: { class: 'reg-hide', id: 'reg-password-repeat-equality' }, innerText: constants.clues.passwordsNotEqual});

    const registrationButton = new Button(
        { innerText: 'Зарегистрироваться', attributes: { class: 'reg-button', type: 'submit' } });

    return {
        mailLabel,
        mailInput,
        mailEmpty,
        loginLabel,
        loginInput,
        loginEmpty,
        loginError,
        firstNameLabel,
        firstNameInput,
        firstNameEmpty,
        firstNameError,
        secondNameLabel,
        secondNameInput,
        secondNameEmpty,
        secondNameError,
        phoneLabel,
        phoneInput,
        phoneEmpty,
        phoneError,
        passwordLabel,
        passwordInput,
        passwordEmpty,
        passwordError,
        passwordRepeatLabel,
        passwordRepeatInput,
        passwordRepeatEmpty,
        passwordRepeatError,
        passwordRepeatEquality,
        registrationButton
    };
}