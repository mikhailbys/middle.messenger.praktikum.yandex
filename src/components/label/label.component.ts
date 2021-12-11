import Block from '../../modules/block';

const compile = require('./label.template.pug');

type Props = {
    attributes?: {
        class?: string
    },
    innerText: string
}

class Label extends Block {

    constructor(props: Props) {
        super('label', props);
    }

    render() {
        return compile({ innerText: this.props.innerText });
    }
}

export default Label;