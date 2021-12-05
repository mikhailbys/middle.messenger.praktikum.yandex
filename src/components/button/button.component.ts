import Block from '../../modules/block';

const compile = require('./button.template.pug');

type Props = {
    innerText?: string,
    attributes: {
        class?: string,
        label?: string,
        type?: 'button' | 'submit' | 'reset',
        onClick?: Function
    }
}

class Button extends Block {
    constructor(props: Props) {
        super('button', props);
    }

    render() {
        return  compile({ innerText: this.props.innerText});
    }
}

export default Button;