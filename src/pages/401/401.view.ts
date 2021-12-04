import Block from '../../modules/block';
import '../404/404.styles.scss';
// @ts-ignore
import templateCompile from './401.template.pug';

interface Props {
    templateBase: boolean
}

class Page extends Block {
    constructor(props: Props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return templateCompile();
    }
}

export default Page;
