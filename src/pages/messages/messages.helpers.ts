import Router from "../../modules/router";
import constants from "../../constants";
import {getChats, openChat} from "./messages.service";
import {prepareCreateChatModal} from "./create-chat/create-chat.helpers";
import Store from "../../modules/store";

const handleChatClick = (event, store: Store) => {
    event.stopImmediatePropagation();
    // todo в цикле по chatsData рисовать шаблоны с предзаполненными айдишниками
    const chatId = event.path[0].querySelector('.chat-id-container').innerText;
    const userId = event.path[0].querySelector('.user-id-container').innerText;
    openChat(chatId, userId);
}

export const prepareMessagesPage = async (router: Router) => {
    const store = new Store();
    const chatsData = await getChats();
    console.log(chatsData);

    const chats = document.querySelectorAll('.mess-single-chat-container');
    const messageContainer = document.querySelector('.mess-new-message-container');
    const clue = document.querySelector('.mess-choose-chat-clue');
    const send = document.querySelector('.mess-send-button');
    const messageInput: HTMLInputElement | null = document.querySelector('.mess-message-input');

    chats.forEach(chat => {
        chat.addEventListener('click', (e) => {
            messageContainer?.classList.remove('mess-hide');
            clue?.classList.add('mess-hide');
            handleChatClick(e, store);
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