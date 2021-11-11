import {triggerValidateError} from '../../utils/FormValidation';
import Button from '../../components/button';
import ProfileChangePage from './profile-change.view';
import {render} from '../../utils/RenderDOM';
import {FIO_MASK, LOGIN_MASK} from '../../utils/Masks';
import {addFocusEventOnInput} from "../../utils/FormEvents";

const profileChangePage = new ProfileChangePage();
render('#root', profileChangePage);
const saveButton = new Button({ attributes: { class: 'submit', type: 'submit'}, innerText: 'Сохранить'});
render('.row-data-action', saveButton);

const profileForm: HTMLFormElement | null = document.querySelector('#profile_form');

addFocusEventOnInput(profileForm?.mail, ['mail-empty']);
addFocusEventOnInput(profileForm?.login, ['login-empty', 'login-error']);
addFocusEventOnInput(profileForm?.firstName, ['first-name-empty', 'first-name-error']);
addFocusEventOnInput(profileForm?.secondName, ['second-name-empty', 'second-name-error']);
addFocusEventOnInput(profileForm?.displayName, ['display-name-empty']);
addFocusEventOnInput(profileForm?.phone, ['phone-empty']);

function validate() {
    let result = true;

    // select inputs
    const login = profileForm?.login;
    const firstName = profileForm?.firstName;
    const secondName = profileForm?.secondName;
    const mail = profileForm?.mail;
    const phone = profileForm?.phone;
    const displayName = profileForm?.displayName;

    // hide clues
    document.querySelector('#login-empty')?.classList.remove('show-error');
    document.querySelector('#first-name-empty')?.classList.remove('show-error');
    document.querySelector('#second-name-empty')?.classList.remove('show-error');
    document.querySelector('#mail-empty')?.classList.remove('show-error');
    document.querySelector('#phone-empty')?.classList.remove('show-error');
    document.querySelector('#display-name-empty')?.classList.remove('show-error');
    document.querySelector('#first-name-error')?.classList.remove('show-error');
    document.querySelector('#second-name-error')?.classList.remove('show-error');
    document.querySelector('#login-error')?.classList.remove('show-error');

    if (login.value === '') {
        triggerValidateError(login, '#login-empty');
        result = false;
    }

    if (login.value !== '' && !login.value.match(LOGIN_MASK)) {
        triggerValidateError(login, '#login-error');
        result = false;
    }

    if (firstName.value === '') {
        triggerValidateError(firstName, '#first-name-empty');
        result = false;
    }

    if (firstName.value !== '' && !firstName.value.match(FIO_MASK)) {
        triggerValidateError(firstName, '#first-name-error');
        result = false;
    }

    if (secondName.value === '') {
        triggerValidateError(secondName, '#second-name-empty');
        result = false;
    }

    if (secondName.value !== '' && !secondName.value.match(FIO_MASK)) {
        triggerValidateError(secondName, '#second-name-error');
        result = false;
    }

    if (mail.value === '') {
        triggerValidateError(mail, '#mail-empty');
        result = false;
    }

    if (phone.value === '') {
        triggerValidateError(phone, '#phone-empty');
        result = false;
    }

    if (displayName.value === '') {
        triggerValidateError(displayName, '#display-name-empty');
        result = false;
    }

    return result;
}

function onSubmit(e: Event) {
    e.preventDefault();

    const formData = new FormData(profileForm!);
    const mail = formData.get('mail');
    const login = formData.get('login');
    const firstName = formData.get('firstName');
    const secondName = formData.get('secondName');
    const displayName = formData.get('displayName');
    const phone = formData.get('phone');

    validate() ? console.log({ mail, login, firstName, secondName, displayName, phone }) : null;
}

if (profileForm) {
    profileForm.onsubmit = onSubmit
}
