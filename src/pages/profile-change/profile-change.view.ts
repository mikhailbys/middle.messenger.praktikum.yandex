// @ts-ignore
import templateCompile from './profile-change.template.pug';
import Block from "../../modules/block";
import './profile-change.styles.scss';
import {initializeComponents} from "./profile-change.components";

class Page extends Block {
    constructor(
        props = { templateBase: true },
        children = initializeComponents()
    ) {
        super('div', props, children);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
