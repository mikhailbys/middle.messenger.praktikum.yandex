import ChatsAPI from "../../api/chats/chats.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {Chat} from "../../models/chat";
import WebSocketService from "../../services/webSocket.service";

const api = new ChatsAPI();
const store = new Store();
const currentPage = constants.routes.messages;

export const getChats = async () => {
    const response = await api.chats();
    if (response.status === 200 && response.response) {
        const data: Chat[] = JSON.parse(response.response);
        console.log(data);
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
    const response = await api.addUserToChat(userId, chatId);
    return response;
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
    const token = await getToken(chatId);

    if (!token) {
        return;
    }

    // init socket
    const socket = new WebSocketService(Number(userId), Number(chatId), token);
    // update store
    /*store.updateNoRender({
        currentChatId: chatId,
        token: ''
    }, constants.routes.messages);*/
};