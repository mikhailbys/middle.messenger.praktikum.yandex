import '../messages.styles.scss';
import {initializeInnerComponents} from "./single-chat.components";
import Block from "../../../modules/block";
import {Chat} from "../../../models/chat";

const compile = require('./single-chat.template.pug');


class ChatElement extends Block {
    chat?: Chat;

    constructor(
        props = { templateBase: true },
        chat = undefined,
        children = initializeInnerComponents(chat)
    ) {
        const replaceChildren = initializeInnerComponents(chat);
        super('div', props, children);
    }

    render() {
        return compile();
    }
}

export default ChatElement;
