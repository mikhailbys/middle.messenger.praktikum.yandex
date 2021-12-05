import Block from '../../modules/block';

const compile = require('./div.template.pug');

type Props = {
    label?: string,
    attributes: {
        class?: string,
        id?: string
    },
    innerText: string
}

class Label extends Block {

    constructor(props: Props) {
        super('span', props);
    }

    render() {
        return compile({ innerText: this.props.innerText });
    }
}

export default Label;