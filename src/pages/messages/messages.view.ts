import Block from '../../modules/block';
import './messages.styles.scss';
// @ts-ignore
import templateCompile from './messages.template.pug';
import Input from "../../components/input";
import Span from "../../components/span/span.component";
import Button from "../../components/button";

const searchInput = new Input({ attributes:
        { type: 'text', class: 'search-input', placeholder: 'Поиск' }});
const img = new Span({ attributes: { class: 'messenger-text'}, innerText: 'Изображение'});
const time = new Span({ attributes: { class: 'time'}, innerText: '10:10'});
const chooseChat = new Span({ attributes:
        { class: 'choose-chat-clue'}, innerText: 'Выберите чат, чтобы начать общение'});
const messInput = new Input({ attributes:
        { type: 'text', class: 'message-input', name: 'message', placeholder: 'Введите сообщение..' }});

const sendButton = new Button({ innerText: '>', attributes: { class: 'send-button' } });

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = {
            searchInput: searchInput,
            img: img,
            time: time,
            chooseChat: chooseChat,
            messInput: messInput,
            sendButton: sendButton
        }) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
