import Button from "../../components/button";
import Span from "../../components/span/span.component";
import Input from "../../components/input";
import constants from "../../constants";
import Avatar from "./avatar/avatat.view";

export const initializeComponents = () => {

    const mailLabel = new Span({
        attributes: {},
        innerText: 'Почта'
    });
    const mailInput = new Input({
        attributes: {
            type: 'email', name: 'mail', class: 'field-input'
        }
    });
    const mailClue = new Span({ attributes: {
            class: 'hide',
            id: 'mail-empty'
        }, innerText: 'Введите почту' });

    const loginLabel = new Span({
        attributes: {},
        innerText: 'Логин'
    });
    const loginInput = new Input({
        attributes: {
            type: 'text', name: 'login', class: 'field-input'
        }
    });
    const loginClue = new Span({ attributes: {
            class: 'hide',
            id: 'login-empty'
        }, innerText: 'Введите логин' });
    const loginError = new Span({ attributes: {
            class: 'hide',
            id: 'login-error'
        }, innerText: constants.clues.loginRule });

    const nameLabel = new Span({
        attributes: {},
        innerText: 'Имя'
    });
    const nameInput = new Input({
        attributes: {
            type: 'text', name: 'firstName', class: 'field-input'
        }
    });
    const nameClue = new Span({ attributes: {
            class: 'hide',
            id: 'first-name-empty'
        }, innerText: 'Введите имя' });
    const nameError = new Span({ attributes: {
            class: 'hide',
            id: 'first-name-error'
        }, innerText: constants.clues.nameRule });

    const secondNameLabel = new Span({
        attributes: {},
        innerText: 'Фамилия'
    });
    const secondNameInput = new Input({
        attributes: {
            type: 'text', name: 'secondName', class: 'field-input'
        }
    });
    const secondNameClue = new Span({ attributes: {
            class: 'hide',
            id: 'second-name-empty'
        }, innerText: 'Введите фамилию' });
    const secondNameError = new Span({ attributes: {
            class: 'hide',
            id: 'second-name-error'
        }, innerText: constants.clues.nameRule });


    const chatNameLabel = new Span({
        attributes: {},
        innerText: 'Имя в чате'
    });
    const chatNameInput = new Input({
        attributes: {
            type: 'text', name: 'displayName', class: 'field-input'
        }
    });
    const chatNameClue = new Span({ attributes: {
            class: 'hide',
            id: 'display-name-empty'
        }, innerText: 'Введите имя в чате' });

    const phoneLabel = new Span({
        attributes: {},
        innerText: 'Телефон'
    });
    const phoneInput = new Input({
        attributes: {
            type: 'text', name: 'phone', class: 'field-input'
        }
    });
    const phoneClue = new Span({ attributes: {
            class: 'hide',
            id: 'phone-empty'
        }, innerText: 'Введите телефон' });

    const saveButton = new Button(
        {
            attributes: {
                class: 'submit',
                type: 'submit'
            },
            innerText: 'Сохранить'
        });

    const avatar = new Avatar();

    return {
        mailLabel,
        mailInput,
        mailClue,
        loginLabel,
        loginInput,
        loginClue,
        loginError,
        nameLabel,
        nameInput,
        nameClue,
        nameError,
        secondNameLabel,
        secondNameInput,
        secondNameClue,
        secondNameError,
        chatNameLabel,
        chatNameInput,
        chatNameClue,
        phoneLabel,
        phoneInput,
        phoneClue,
        saveButton,
        avatar
    };
};