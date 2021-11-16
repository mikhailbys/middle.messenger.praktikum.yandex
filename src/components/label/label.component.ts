import Block from '../../modules/block';
// @ts-ignore
import templateCompile from './label.template.pug';

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
        return templateCompile({ innerText: this.props.innerText });
    }
}

export default Label;