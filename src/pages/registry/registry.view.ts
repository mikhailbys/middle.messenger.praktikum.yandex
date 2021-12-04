import Block from '../../modules/block';
import './registry.styles.scss';
// @ts-ignore
import templateCompile from './registry.template.pug';
import {initializeInnerComponents} from "./registry.components";

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
