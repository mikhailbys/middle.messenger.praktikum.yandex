import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './registry.template.pug';

type Props = {
    label?: string,
    attributes: {
        className?: string,
        label?: string,
        buttonType?: 'button' | 'submit' | 'reset',
        onClick?: Function
    },
}

class Page extends Block {
    constructor(props: Props) {
        super('div', props);
    }

    render() {
        const template = templateCompile();
        return template;
    }
}

export default Page;
