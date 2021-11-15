import Router from "../../modules/router";
import constants from "../../constants";

export const prepareMessagesPage = (router: Router) => {
    const chats = document.querySelectorAll('.single-chat-container');
    const messageContainer = document.querySelector('.new-message-container');
    const clue = document.querySelector('.choose-chat-clue');
    const send = document.querySelector('.send-button');
    const messageInput: HTMLInputElement | null = document.querySelector('.message-input');

    chats.forEach(chat => {
        chat.addEventListener('click', () => {
            messageContainer?.classList.remove('hide');
            clue?.classList.add('hide');
        })
    });
    send?.addEventListener('click', () => {
        validateMessageInput(messageInput) ? console.log({ message: messageInput?.value}) : null;
    });

    const profileHref = document.querySelector('#profile');
    profileHref?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.settings);
    })
}

const validateMessageInput = (messageInput: HTMLInputElement | null) => {
    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }
    return true;
}