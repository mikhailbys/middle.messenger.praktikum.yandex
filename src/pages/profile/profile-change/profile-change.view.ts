
// @ts-ignore
import templateCompile from './profile-change.template.pug';
import Block from "../../../modules/block";

class Page extends Block {
    constructor(props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
