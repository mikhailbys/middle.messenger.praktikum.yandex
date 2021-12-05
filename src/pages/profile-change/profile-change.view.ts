import Block from "../../modules/block";
import './profile-change.styles.scss';
import {initializeComponents} from "./profile-change.components";

const compile = require('./profile-change.template.pug');

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = initializeComponents()
    ) {
        super('div', props, children);
    }

    render() {
        return compile();
    }
}

export default Page;
