import Block from '../../modules/block';

const compile = require('./input.template.pug');

type Props = {
    attributes: {
        class?: string,
        label?: string,
        type?: string,
        name?: string,
        placeholder?: string,
        id?: string
    },
    value?: string
}

class Input extends Block {

    constructor(props: Props) {
        super('input', props);
    }

    render() {
        return compile();
    }
}

export default Input;