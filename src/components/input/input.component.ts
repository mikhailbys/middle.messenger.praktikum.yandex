import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './input.template.pug';

type Props = {
    attributes: {
        class?: string,
        label?: string,
        type?: string,
        name?: string,
        placeholder?: string,
        id?: string
    },
}

class Input extends Block {

    constructor(props: Props) {
        super('input', props);
    }


    render() {
        const template = templateCompile();
        console.log('inputTemplate', template);
        return template;
    }
}

export default Input;