import './avatar.styles.scss';
import Block from "../../../modules/block";

const compile = require('./avatar.template.pug');

class Avatar extends Block {
    constructor(props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return compile();
    }
}

export default Avatar;
