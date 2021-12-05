import Router from "../../modules/router";
import constants from "../../constants";
import {getChats, handleChatClick} from "./messages.service";
import {prepareCreateChatModal} from "./create-chat/create-chat.helpers";
import Store from "../../modules/store";
import {Chat} from "../../models/chat";
import ChatElement from "./single-chat/single-chat.view";
import SingleChats from "./single-chats/single-chats.view";

export const prepareMessagesPage = async (router: Router) => {
    const store = new Store();
    const chatsData = await getChats();

    if (chatsData !== []) {
        const chatComponent = createChatComponent(chatsData);
        store.update({
            type: 'childrenToUpdate',
            props: {
                chatComponent
            }
        }, constants.routes.messages);
    }

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
            handleChatClick(e);
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

const createChatComponent = (chats: Chat[]) => {
    let chatComponents = {};
    chats.forEach(chat => {
        const chatElement = new ChatElement(
            { templateBase: true },
            // @ts-ignore
            chat,
            {}
        );
        chatComponents = {...chatComponents, chatComponent: chatElement};
    });
    return new SingleChats({ attributes: {}, chats, templateBase: true });
}