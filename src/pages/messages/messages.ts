import Button from "../../components/button";
import {render} from "../../utils/RenderDOM";

const chats = document.querySelectorAll('.single-chat-container');
const messageContainer = document.querySelector('.new-message-container');
const clue = document.querySelector('.choose-chat-clue');
const messageInput: HTMLInputElement | null = document.querySelector('.message-input');

chats.forEach(chat => {
    chat.addEventListener('click', () => {
        messageContainer?.classList.remove('hide');
        clue?.classList.add('hide');
    })
});

function validateMessageInput() {
    let result = true;

    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }

    return result;
}

function onSend() {
    validateMessageInput() ? console.log({ message: messageInput?.value}) : null;
}

const sendButton = new Button({
    className: 'send-button',
    label: '>',
    onClick: onSend
});
render('.send-button-container', sendButton);

