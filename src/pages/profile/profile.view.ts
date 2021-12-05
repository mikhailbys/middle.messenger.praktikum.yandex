import Block from '../../modules/block';
import './profile.styles.scss';
import {initializeInnerComponents} from "./profile.components";

const compile = require('./profile.template.pug');

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
