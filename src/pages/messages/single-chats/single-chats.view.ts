import Block from "../../../modules/block";
import {Chat} from "../../../models/chat";

const compile =  require('./single-chats.template.pug');

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
        return compile(this.props.chats);
    }
}

export default SingleChats;
