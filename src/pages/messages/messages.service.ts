import ChatsAPI from "../../api/chats/chats.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {Chat} from "../../models/chat";
import WebSocketService from "../../services/webSocket.service";
import {validateMessageInput} from "./messages.helpers";

const api = new ChatsAPI();
const store = new Store();
const currentPage = constants.routes.messages;

export const getChats = async () => {
    const response = await api.chats();
    if (response.status === 200 && response.response) {
        const data: Chat[] = JSON.parse(response.response);
        if (data[0].last_message !== null) {
            store.update({
                type: 'innerText',
                props: {
                    messengerName: 'Ваня',
                    messageCounter: '1',
                    lastText: 'Привет'
                }
            }, currentPage);
        }
        return JSON.parse(response.response);
    }
};

export const createChat = async (title: string) => {
    const response = await api.createChat(title);
    return response.status === 200 && response.response;
};

export const addUserToChat = async (userId: number, chatId: number) => {
    return await api.addUserToChat(userId, chatId);
};

const getToken = async (chatId: string) => {
    const response = await api.token(Number(chatId));
    if (response.status === 200 && response.response) {
        const tokenObj = JSON.parse(response.response);
        return tokenObj.token;
    }
    return '';
};

export const openChat = async (chatId: string, userId: string) => {
    return getToken(chatId).then((token: string) =>
        new WebSocketService(Number(userId), Number(chatId), token));
    /*store.updateNoRender({
        currentChatId: chatId,
        token
    }, constants.routes.messages);*/
};

export const handleChatClick = async (event, store: Store) => {
    event.stopImmediatePropagation();
    const chatId = event.path[0].querySelector('.chat-id-container').innerText;
    const userId = event.path[0].querySelector('.user-id-container').innerText;
    openChat(chatId, userId).then(wss => {
        if (wss) {
            const sendButton = document.querySelector('.mess-send-button');
            const messageInput: HTMLInputElement | null = document.querySelector('.mess-message-input');
            sendButton?.addEventListener('click', () => {
                if (validateMessageInput(messageInput)) {
                    const message = messageInput?.value ?? '';
                    wss.send(message);
                    // попробовать заменить на children для шаблона
                    const messageElement = document.createElement('div');
                    messageElement.className = 'my-message';
                    messageElement.innerText = message;
                    const container = document.querySelector('#current-chat-container');
                    container?.append(messageElement);
                    //@ts-ignore
                    messageInput.value = '';
                }
            });
        }
    });


}