// @ts-ignore
import templateCompile from './password-change.template.pug';
import Block from "../../modules/block";
import './password-change.styles.scss';
import {initializeInnerComponents} from "./password-change.components";

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
