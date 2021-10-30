import Block from "../../modules/block";
// @ts-ignore
import templateCompile from "./Button.template.pug";

type Props = {
    className?: string,
    label?: string,
    onClick?: () => void
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