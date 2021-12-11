import Block from '../../modules/block';
import './404.styles.scss';

const compile = require('./404.template.pug');

interface Props {
    templateBase: boolean
}

class Page extends Block {
    constructor(props: Props = { templateBase: true }) {
        super('div', props);
    }

    render() {
        return compile();
    }
}

export default Page;
