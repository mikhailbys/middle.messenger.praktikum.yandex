import Block from "../../block";
import {render} from "../../../utils/RenderDOM";

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

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block!);
            return;
        }

        this._block.show();
    }
}

export default Route;