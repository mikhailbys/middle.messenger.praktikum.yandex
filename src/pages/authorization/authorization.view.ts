import Block from '../../modules/block';
import './authorization.styles.scss';
import {initializeInnerComponents} from "./authorization.components";

const compile = require('./authorization.template.pug');

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
