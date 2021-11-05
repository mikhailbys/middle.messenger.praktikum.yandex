import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './button.template.pug';

type Props = {
    innerText?: string,
    attributes: {
        class?: string,
        label?: string,
        type?: 'button' | 'submit' | 'reset',
        onClick?: Function
    },
}

class Button extends Block {
    constructor(props: Props) {
        super('button', props);
    }

    render() {
        return  templateCompile({ innerText: this.props.innerText});
    }
}

export default Button;