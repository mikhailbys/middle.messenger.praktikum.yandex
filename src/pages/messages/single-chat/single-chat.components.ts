import Div from "../../../components/div/div.component";
import Span from "../../../components/span/span.component";
import {Chat} from "../../../models/chat";

export const initializeInnerComponents = (chat?: Chat) => {
    if (chat) {
        return initializeWithProps(chat);
    }
    return initializeEmpty();
}

const initializeEmpty = () => {
    const messengerName = new Div(
        { attributes: { class:'mess-messenger-name' }, innerText: 'Васса' });
    const messageCounter = new Div({ attributes: { class:'mess-counter' }, innerText: '1' });

    const chatId = new Span({ attributes: { class: 'chat-id-container'}, innerText: '689'});
    const userId = new Span({ attributes: { class: 'user-id-container'}, innerText: '143276'});

    const lastText = new Span({ attributes: { class: 'mess-messenger-text'}, innerText: 'Привет'});
    const time = new Span({ attributes: { class: 'mess-time'}, innerText: '10:10'});
    return {
        messengerName,
        messageCounter,
        lastText,
        chatId,
        userId,
        time
    }
}

const initializeWithProps = (chat: Chat) => {
    const messengerName = new Div(
        { attributes: { class:'mess-messenger-name' }, innerText: chat.title });
    const messageCounter = new Div(
        { attributes: { class:'mess-counter' }, innerText: chat.unread_count?.toString() });

    const chatId = new Span(
        { attributes: { class: 'chat-id-container'}, innerText: chat.id?.toString() });
    // todo убрать тестовый id
    const userId = new Span(
        { attributes: { class: 'user-id-container'}, innerText: '143276'});

    const lastText = new Span(
        { attributes: { class: 'mess-messenger-text'}, innerText: chat.last_message?.content ?? ''});
    const time = new Span(
        { attributes: { class: 'mess-time'}, innerText: chat.last_message?.time ?? '' });
    return {
        messengerName,
        messageCounter,
        lastText,
        chatId,
        userId,
        time
    }
}