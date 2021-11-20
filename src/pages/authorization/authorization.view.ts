import Block from '../../modules/block';
import './authorization.styles.scss';
// @ts-ignore
import templateCompile from './authorization.template.pug';
import {initializeInnerComponents} from "./authorization.components";

interface Props {
    templateBase: boolean
}

class Page extends Block {
    constructor(
        props: Props = { templateBase: true },
        children = initializeInnerComponents()
    ) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
