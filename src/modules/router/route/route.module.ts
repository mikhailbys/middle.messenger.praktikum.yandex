import Block from "../../block";
import {render} from "../../../utils/renderDOM";

type Props = {
    type: 'value' | 'innerText'
    props: { [blockName: string]: string }
}

function isEqual(lhs, rhs) {
    return lhs === rhs;
}

class Route {

    _pathname: string;
    _blockClass;
    _block: Block | null;
    _props: { rootQuery: string };

    constructor(pathname: string, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname) {
        return isEqual(pathname, this._pathname);
    }

    updateRouteBlock(props: Props) {
        switch (props.type) {
            case "value":
                Object.keys(props.props).forEach(block => {
                    this._block!.children[block].setProps({ value: props.props[block]})
                });
                render(this._props.rootQuery, this._block!);
                return;
            case "innerText":
                Object.keys(props.props).forEach(block => {
                    this._block!.children[block].setProps({ innerText: props.props[block]})
                });
                render(this._props.rootQuery, this._block!);
                break;
        }
        return;
    }

    render(props?: Props) {

        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block!);
            return;
        }

        if (this._block && props) {
            this.updateRouteBlock(props);
        }

        this._block.show();
    }
}

export default Route;