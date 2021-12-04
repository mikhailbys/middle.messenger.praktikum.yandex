import '../messages.styles.scss';
// @ts-ignore
import templateCompile from './single-chat.template.pug';
import {initializeInnerComponents} from "./single-chat.components";
import Block from "../../../modules/block";
import {Chat} from "../../../models/chat";


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
        return templateCompile();
    }
}

export default ChatElement;
