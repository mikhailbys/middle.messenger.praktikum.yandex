import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './button.template.pug';

type Props = {
    label?: string,
    attributes: {
        className?: string,
        label?: string,
        buttonType?: 'button' | 'submit' | 'reset',
        onClick?: Function
    },
}

class Button extends Block {
    _label: string;

    constructor(props: Props, label?: string) {
        super('div', props);
    }


    render() {
        const template = templateCompile({ label: 'Label!' });
        console.log('template', template);
        return template;
    }
}

export default Button;