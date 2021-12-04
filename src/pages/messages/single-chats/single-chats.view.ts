// @ts-ignore
import templateCompile from './single-chats.template.pug';
import Block from "../../../modules/block";
import {Chat} from "../../../models/chat";

type Props = {
    attributes: {
        class?: string,
        label?: string,
        type?: 'button' | 'submit' | 'reset',
        onClick?: Function
    },
    templateBase: boolean,
    chats?: Chat[],
}

class SingleChats extends Block {
    constructor(
        props: Props
    ) {
        super('div', props);
    }

    render() {
        return templateCompile(this.props.chats);
    }
}

export default SingleChats;
