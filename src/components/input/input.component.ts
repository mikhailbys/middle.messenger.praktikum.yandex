import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './input.template.pug';

type Props = {
    attributes: {
        className?: string,
        label?: string,
        type?: string,
        name?: string
    },
}

class Input extends Block {

    constructor(props: Props) {
        super('input', props);
    }


    render() {
        const template = templateCompile();
        console.log('template', template);
        return template;
    }
}

export default Input;