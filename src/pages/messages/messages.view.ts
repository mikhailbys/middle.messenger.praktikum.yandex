import Block from '../../modules/block';
import './messages.styles.scss';
import {initializeInnerComponents} from "./messages.components";

const compile = require('./messages.template.pug');

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = initializeInnerComponents()
    ) {
        super('div', props, children);
    }

    render() {
        return compile();
    }
}

export default Page;
