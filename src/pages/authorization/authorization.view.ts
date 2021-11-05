import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './authorization.template.pug';

class Page extends Block {
    constructor(props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
