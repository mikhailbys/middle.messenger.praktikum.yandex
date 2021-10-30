import Block from "../../modules/block";
// @ts-ignore
import templateCompile from "./button.template.pug";

type Props = {
    className?: string,
    label?: string,
    buttonType?: 'button' | 'submit' | 'reset',
    onClick?: Function
}

class Button extends Block {
    constructor(props: Props) {
        super("button", props);
    }

    render() {
        return templateCompile;
    }
}

export default Button;