import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './label.template.pug';

type Props = {
    attributes: {
        className?: string
    },
}

class Label extends Block {

    constructor(props: Props) {
        super('label', props);
    }


    render() {
        const template = templateCompile({label: 'Логин'});
        console.log('labelTemp', template);
        return template;
    }
}

export default Label;