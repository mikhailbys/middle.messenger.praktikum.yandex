import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './authorization.template.pug';

type Props = {}

class Page extends Block {
    constructor(props: Props) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
