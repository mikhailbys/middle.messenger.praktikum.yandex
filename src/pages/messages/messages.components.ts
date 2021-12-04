import Input from "../../components/input";
import Span from "../../components/span/span.component";
import Button from "../../components/button";
import Div from "../../components/div";
import Modal from "./create-chat/create-chat.view";
import ChatElement from "./single-chat/single-chat.view";
import {Chat} from "../../models/chat";

export const initializeInnerComponents = () => {

    const lastText = new Span({ attributes: { class: 'mess-messenger-text'}, innerText: 'Привет'});
    const time = new Span({ attributes: { class: 'mess-time'}, innerText: '10:10'});
    const chooseChat = new Span({ attributes:
            { class: 'mess-choose-chat-clue'}, innerText: 'Выберите чат, чтобы начать общение'});

    const searchInput = new Input({ attributes:
            { type: 'text', class: 'mess-search-input', placeholder: 'Поиск' }});
    const messInput = new Input({ attributes:
            { type: 'text', class: 'mess-message-input',
                name: 'message', placeholder: 'Введите сообщение..' }});

    const sendButton = new Button({ innerText: '>', attributes: { class: 'mess-send-button' } });

    const createChatModal = new Modal();

    const messengerName = new Div({ attributes: { class:'mess-messenger-name' }, innerText: 'Васса' });
    const messageCounter = new Div({ attributes: { class:'mess-counter' }, innerText: '1' });

    const chatComponent = new ChatElement();

    return {
        searchInput,
        lastText,
        time,
        chooseChat,
        messInput,
        sendButton,
        createChatModal,
        messengerName,
        messageCounter,
        chatComponent
    }
}

export const initializeInne1rComponents = (chat: Chat) => {

    const messengerName = new Div(
        { attributes: { class:'mess-messenger-name' },
            innerText: chat.title
        });
    const messageCounter = new Div(
        { attributes: { class:'mess-counter' },
            innerText: chat.unread_count?.toString() ?? ''
        });

    const chatId = new Span({ attributes: { class: 'chat-id-container'}, innerText: chat.id?.toString() ?? ''});
    const userId = new Span({ attributes: { class: 'user-id-container'}, innerText: '143276'});

    const lastText = new Span(
        { attributes: { class: 'mess-messenger-text'},
            innerText: chat.last_message?.content ?? ''
        });
    const time = new Span(
        { attributes: { class: 'mess-time'},
            innerText: chat.last_message?.time ?? ''
        });
    return {
        messengerName,
        messageCounter,
        lastText,
        chatId,
        userId,
        time
    }
}