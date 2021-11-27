import Block from "../../../modules/block";
// @ts-ignore
import templateCompile from "./create-chat.template.pug";
import './create-chat.styles.scss';

class Modal extends Block {
    constructor(
        props = {templateBase: true}
    ) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Modal;