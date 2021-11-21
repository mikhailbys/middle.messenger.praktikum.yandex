import Router from "../../modules/router";
import constants from "../../constants";
import {getChats} from "./messages.service";

export const prepareMessagesPage = (router: Router) => {
    getChats();

    const chats = document.querySelectorAll('.mess-single-chat-container');
    const messageContainer = document.querySelector('.mess-new-message-container');
    const clue = document.querySelector('.mess-choose-chat-clue');
    const send = document.querySelector('.mess-send-button');
    const messageInput: HTMLInputElement | null = document.querySelector('.mess-message-input');

    chats.forEach(chat => {
        chat.addEventListener('click', () => {
            messageContainer?.classList.remove('mess-hide');
            clue?.classList.add('mess-hide');
        })
    });
    send?.addEventListener('click', () => {
        validateMessageInput(messageInput) ? console.log({ message: messageInput?.value}) : null;
    });

    const profileHref = document.querySelector('#profile');
    profileHref?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.settings);
    });

    prepareCreateChatModal();
}

const validateMessageInput = (messageInput: HTMLInputElement | null) => {
    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }
    return true;
}

//todo
const prepareCreateChatModal = () => {
    const modal = document.querySelector('#create-modal');
    const createButton = document.querySelector('#create-chat');
    //const input = document.querySelector('');
    //const button = document.querySelector('');

    createButton?.addEventListener('click', (e) => {
        e.preventDefault();
        // @ts-ignore
        modal.style.display = "block";
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            // @ts-ignore
            modal.style.display = "none";
        }
    }
}