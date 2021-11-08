import Button from '../../components/button';
import MessagesPage from "./messages.view";

import {render} from '../../utils/RenderDOM';
import Input from "../../components/input";
import Span from "../../components/span/span.component";
import constants from "../../constants";

// шаблон страницы
const messagesPage = new MessagesPage();

const searchInput = new Input({ attributes:
        { type: 'text', class: 'search-input', placeholder: 'Поиск' }});
const img = new Span({ attributes: { class: 'messenger-text'}, innerText: 'Изображение'});
const time = new Span({ attributes: { class: 'time'}, innerText: '10:10'});
const chooseChat = new Span({ attributes:
        { class: 'choose-chat-clue'}, innerText: 'Выберите чат, чтобы начать общение'});
const messInput = new Input({ attributes:
        { type: 'text', class: 'message-input', name: 'message', placeholder: 'Введите сообщение..' }});

const sendButton = new Button({ innerText: '>', attributes: { class: 'send-button' } });

render('#root', messagesPage);
render('.list-header', searchInput);
render('.message', img);
render('.info', time);
render('.choose-chat', chooseChat);
render('.new-message-container', messInput);

render('.send-button-container', sendButton);

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

function validateMessageInput() {
    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }

    return true;
}

function onSend() {
    validateMessageInput() ? console.log({ message: messageInput?.value}) : null;
}

send?.addEventListener('click', onSend);

