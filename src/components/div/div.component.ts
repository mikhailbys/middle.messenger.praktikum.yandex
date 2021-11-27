import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './div.template.pug';

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
        return templateCompile({ innerText: this.props.innerText });
    }
}

export default Label;