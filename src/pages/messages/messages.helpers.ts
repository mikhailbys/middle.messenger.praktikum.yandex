import Router from "../../modules/router";
import constants from "../../constants";
import {getChats, handleChatClick} from "./messages.service";
import {prepareCreateChatModal} from "./create-chat/create-chat.helpers";
import Store from "../../modules/store";

export const prepareMessagesPage = async (router: Router) => {
    const store = new Store();
    const chatsData = await getChats();
    console.log(chatsData);

    const chats = document.querySelectorAll('.mess-single-chat-container');
    const messageContainer = document.querySelector('.mess-new-message-container');
    const clue = document.querySelector('.mess-choose-chat-clue');
    const chatContainer = document.querySelector('#current-chat-container');

    chats.forEach(chat => {
        chat.addEventListener('click', (e) => {
            messageContainer?.classList.remove('mess-hide');
            clue?.classList.add('mess-hide');
            while (chatContainer?.lastElementChild) {
                chatContainer.removeChild(chatContainer.lastElementChild);
            }
            handleChatClick(e, store);
        })
    });

    const profileHref = document.querySelector('#profile');
    profileHref?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.settings);
    });

    prepareCreateChatModal();
}

export const validateMessageInput = (messageInput: HTMLInputElement | null) => {
    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }
    return true;
}