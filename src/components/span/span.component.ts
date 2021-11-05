import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './span.template.pug';

type Props = {
    label?: string,
    attributes: {
        className?: string,
        label?: string
    },
}

class Label extends Block {
    _label: string;

    constructor(props: Props, label?: string) {
        super('span', props);
    }


    render() {
        const template = templateCompile({ label: 'Label!' });
        console.log('template', template);
        return template;
    }
}

export default Label;