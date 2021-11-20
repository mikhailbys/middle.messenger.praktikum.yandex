import Input from "../../components/input";
import Span from "../../components/span/span.component";
import Button from "../../components/button";

export const initializeInnerComponents = () => {

    const img = new Span({ attributes: { class: 'mess-messenger-text'}, innerText: 'Изображение'});
    const time = new Span({ attributes: { class: 'mess-time'}, innerText: '10:10'});
    const chooseChat = new Span({ attributes:
            { class: 'mess-choose-chat-clue'}, innerText: 'Выберите чат, чтобы начать общение'});

    const searchInput = new Input({ attributes:
            { type: 'text', class: 'mess-search-input', placeholder: 'Поиск' }});
    const messInput = new Input({ attributes:
            { type: 'text', class: 'mess-message-input',
                name: 'message', placeholder: 'Введите сообщение..' }});

    const sendButton = new Button({ innerText: '>', attributes: { class: 'mess-send-button' } });

    return {
        searchInput,
        img,
        time,
        chooseChat,
        messInput,
        sendButton
    }
}