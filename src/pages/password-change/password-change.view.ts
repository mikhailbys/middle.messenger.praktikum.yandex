import Block from "../../modules/block";
import './password-change.styles.scss';
import {initializeInnerComponents} from "./password-change.components";

const compile = require('./password-change.template.pug');

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
        return compile();
    }
}

export default Page;
