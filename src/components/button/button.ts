import Block from "../../modules/block";
// @ts-ignore
import templateCompile from "./button.template.pug";

type Props = {
    className?: string,
    label?: string,
    onClick?: () => void
}

export default class Button extends Block {
    constructor(props: Props) {
        super("button", props);
    }

    render() {
        return templateCompile;
    }
}