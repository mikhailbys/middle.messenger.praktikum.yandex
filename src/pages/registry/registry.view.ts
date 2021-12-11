import Block from '../../modules/block';
import './registry.styles.scss';
import {initializeInnerComponents} from "./registry.components";

const compile = require('./registry.template.pug');

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
