import Block from '../../modules/block';
import './profile.styles.scss';
// @ts-ignore
import templateCompile from './profile.template.pug';
import {initializeInnerComponents} from "./profile.components";

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
