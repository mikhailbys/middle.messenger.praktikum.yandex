import Block from '../../modules/block';
import './messages.styles.scss';
// @ts-ignore
import templateCompile from './messages.template.pug';
import {initializeInnerComponents} from "./messages.components";

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = initializeInnerComponents()
    ) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
