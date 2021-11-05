import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './span.template.pug';

type Props = {
    label?: string,
    attributes: {
        class?: string,
        id?: string
    },
}

class Label extends Block {
    _label: string;

    constructor(props: Props, label?: string) {
        super('span', props);
    }


    render() {
        const template = templateCompile({label: 'Введи'});
        console.log('template', template);
        return template;
    }
}

export default Label;