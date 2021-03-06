import {triggerValidateError} from '../../utils/formValidation';
import {PASSWORD_REGEXP} from '../../utils/masks';
import {addFocusEventOnInput} from "../../utils/formEvents";
import Router from "../../modules/router";
import constants from "../../constants";
import {changePassword} from "./password-change.service";

export const preparePasswordSettingsPage = (router: Router) => {
    const passwordForm: HTMLFormElement | null = document.querySelector('#password_form');

    addFocusEventOnInput(passwordForm?.oldPassword, ['old-password-empty']);
    addFocusEventOnInput(passwordForm?.newPassword,
        ['new-password-empty', 'new-password-error', 'new-password-equality']);
    addFocusEventOnInput(passwordForm?.newPasswordRepeat,
        ['new-password-repeat-empty', 'new-password-repeat-error', 'new-password-repeat-equality']);

    if (passwordForm) {
        passwordForm.onsubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(passwordForm);

            const oldPassword = formData.get('oldPassword');
            const newPassword = formData.get('newPassword');

            if (validate(passwordForm)) {
                changePassword({
                    newPassword: newPassword as string,
                    oldPassword: oldPassword as string
                }, router)
                    .then((response) => response && router.go(constants.routes.settings));
            }
        };
    }

    const back = document.querySelector('#pass-change-back');
    back?.addEventListener('click', async (e) => {
        e.preventDefault();
        router.go(constants.routes.settings);
    });
}

function validate(passwordForm: HTMLFormElement) {
    let result = true;

    // select inputs
    const oldPassword = passwordForm?.oldPassword;
    const newPassword = passwordForm?.newPassword;
    const newPasswordRepeat = passwordForm?.newPasswordRepeat;

    // hide clues
    document.querySelector('#old-password-empty')?.classList.remove('show-error');
    document.querySelector('#new-password-empty')?.classList.remove('show-error');
    document.querySelector('#new-password-error')?.classList.remove('show-error');
    document.querySelector('#new-password-equality')?.classList.remove('show-error');
    document.querySelector('#new-password-repeat-empty')?.classList.remove('show-error');
    document.querySelector('#new-password-repeat-error')?.classList.remove('show-error');
    document.querySelector('#new-password-repeat-equality')?.classList.remove('show-error');

    // ???????????? ???????????? ????????????
    if (oldPassword.value === '') {
        triggerValidateError(oldPassword, '#old-password-empty');
        result = false;
    }

    // ?????????? ???????????? ????????????
    if (newPassword.value === '') {
        triggerValidateError(newPassword, '#new-password-empty');
        result = false;
    }

    // ?????????????????? ?????????? ???????????? ????????????
    if (newPasswordRepeat.value === '') {
        triggerValidateError(newPasswordRepeat, '#new-password-repeat-empty');
        result = false;
    }

    // ?????????? ???????????? ???? ?????????????????????????? ??????????
    if (newPassword.value !== '' && !newPassword.value.match(PASSWORD_REGEXP)) {
        triggerValidateError(newPassword, '#new-password-error');
        result = false;
    }

    // ?????????? ?????????????????? ???????????? ???? ?????????????????????????? ??????????
    if (newPasswordRepeat.value !== '' && !newPasswordRepeat.value.match(PASSWORD_REGEXP)) {
        triggerValidateError(newPasswordRepeat, '#new-password-repeat-error');
        result = false;
    }

    // ?????????? ???????????? ???????????????? ????????????
    if (newPasswordRepeat.value !== ''
        && !newPasswordRepeat.value.match(PASSWORD_REGEXP)
        && oldPassword.value === newPassword.value ) {
        triggerValidateError(newPasswordRepeat, '#new-password-equality');
        result = false;
    }

    // ?????????? ?????????????????? ???????????? ???? ?????????????????? ?????????? ????????????
    if (newPassword.value !== ''
        && newPasswordRepeat !== ''
        && newPassword.value.match(PASSWORD_REGEXP)
        && newPasswordRepeat.value.match(PASSWORD_REGEXP)
        && newPassword.value !== newPasswordRepeat.value) {
        triggerValidateError(newPasswordRepeat, '#new-password-repeat-equality');
        result = false;
    }

    return result;
}


