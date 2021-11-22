import Input from "../../components/input";
import Span from "../../components/span/span.component";
import Button from "../../components/button";
import Div from "../../components/div";
import Modal from "./create-chat/create-chat.view";

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

    return {
        searchInput,
        lastText,
        time,
        chooseChat,
        messInput,
        sendButton,
        createChatModal,
        messengerName,
        messageCounter
    }
}