import './avatar.styles.scss';
// @ts-ignore
import templateCompile from './avatar.template.pug';
import Block from "../../../modules/block";

class Avatar extends Block {
    constructor(props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Avatar;
