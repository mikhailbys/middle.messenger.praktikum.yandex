import Block from "../../../modules/block";
import './create-chat.styles.scss';

const compile = require('./create-chat.template.pug');

class Modal extends Block {
    constructor(
        props = {templateBase: true}
    ) {
        super('div', props);
    }

    render() {
        return compile();
    }
}

export default Modal;