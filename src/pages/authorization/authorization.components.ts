import Label from "../../components/label";
import Input from "../../components/input";
import Span from "../../components/span/span.component";
import constants from "../../constants";
import Button from "../../components/button";
import Store from "../../modules/store";

export const initializeInnerComponents = (store: Store) => {

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

    return {
        loginLabel,
        loginInput,
        loginEmpty,
        passwordLabel,
        passwordInput,
        passwordError,
        passwordEmpty,
        authButton
    };
}