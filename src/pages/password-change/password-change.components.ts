import Span from "../../components/span/span.component";
import Input from "../../components/input";
import constants from "../../constants";
import Button from "../../components/button";
import {render} from "../../utils/RenderDOM";

export const initializeInnerComponents = () => {
    const oldPassSpan = new Span({ attributes: {}, innerText: 'Старый пароль'});
    const oldPassInput = new Input({
        attributes: {
            type: 'password',
            name: 'oldPassword',
            placeholder: 'Введите пароль',
            class: 'password-input'}
    });
    const oldPassClue = new Span({
        attributes: {
            class: 'hide',
            id: 'old-password-empty'
        }, innerText: 'Введите старый пароль'});

    const newPassSpan = new Span({ attributes: {}, innerText: 'Новый пароль'});
    const newPassInput = new Input({
        attributes: {
            type: 'password',
            name: 'newPassword',
            placeholder: 'Введите пароль',
            class: 'password-input'}
    });
    const newPassClue = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-empty'
        }, innerText: 'Введите новый пароль'});
    const newPassError = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-error'
        }, innerText: constants.clues.passwordRule });
    const newPassEqual = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-equality'
        }, innerText: constants.clues.newPasswordRepeat });

    const newRepPassSpan = new Span({ attributes: {}, innerText: 'Повторите новый пароль'});
    const newRepPassInput = new Input({
        attributes: {
            type: 'password',
            name: 'newPasswordRepeat',
            placeholder: 'Введите пароль',
            class: 'password-input'}
    });
    const newRepPassClue = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-repeat-empty'
        }, innerText: 'Повторите новый пароль'});
    const newRepPassError = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-repeat-error'
        }, innerText: constants.clues.passwordRule });
    const newRepPassEqual = new Span({
        attributes: {
            class: 'hide',
            id: 'new-password-repeat-equality'
        }, innerText: 'Введенные пароли не одинаковы' });

    const saveButton = new Button({ attributes: {
            class: 'submit',
            type: 'submit'
        }, innerText: 'Сохранить'});

    return {
        oldPassSpan,
        oldPassInput,
        oldPassClue,
        newPassSpan,
        newPassInput,
        newPassClue,
        newPassError,
        newPassEqual,
        newRepPassSpan,
        newRepPassInput,
        newRepPassClue,
        newRepPassError,
        newRepPassEqual,
        saveButton
    };
}