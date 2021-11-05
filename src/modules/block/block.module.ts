import EventBus from '../eventBus';

interface Meta {
    tagName: string;
    props: Props;
}

interface Props {
    className?: string,
    label?: string,
    buttonType?: 'button' | 'submit' | 'reset',
    onClick?: () => void
}

const ACCESS_ERROR_MESSAGE = 'Нет доступа';

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_RENDER: 'flow:render',
        FLOW_CDU: 'flow:component-did-update'
    };

    _element: HTMLElement;
    _meta: Meta;
    props: { attributes?: { string: string }, name?: string, innerText?: string };
    eventBus: EventBus;
    children: Record<string, Block>;

    get element() {
        return this._element;
    }

    constructor(tagName = 'div', props = {}, children = {}) {
        this.eventBus = new EventBus();
        this._meta = { tagName, props };
        this.props = this._makePropsProxy(props);
        this.children = children;
        this._registerEvents();
        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents() {
        this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _setAttributes(element: HTMLElement, attributes: Record<string, string> = {}) {
        Object.keys(attributes).forEach((attr: string) => {
            element.setAttribute(attr, attributes[attr]);
        });
    }

    _createDocumentElement(tagName: string, attributes = {}) {
        const element = document.createElement(tagName);
        this._setAttributes(element, attributes);
        return element;
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName, this.props.attributes);
    }

    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount(this.props);
    }

    componentDidMount(_oldProps: any): void | boolean {
        return false;
    }

    _updateResources(newProps: { attributes?: {}; }) {
        const { attributes = {} } = newProps;
        this._setAttributes(this.element, attributes);
    }

    _componentDidUpdate(newProps: any, oldProps: any) {
        this.componentDidUpdate(newProps, oldProps);
        this._updateResources(newProps);
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidUpdate(_newProps: any, _oldProps: any): void | boolean {
        return true; // todo
    }

    setProps = (nextProps: any) => {
        if (nextProps) {
            Object.assign(this.props, nextProps);
        }
    };

    stringToDocumentFragment(string: string) {
        const template = document.createElement('template');
        template.innerHTML = string;
        return template.content;
    }

    replaceChildren() {
        if (!Object.values(this.children).length) return;
        const childrenToReplace = this.element.querySelectorAll('[data-component]');
        childrenToReplace.forEach((childrenToReplace) => {
            // @ts-ignore
            const componentName = childrenToReplace.dataset.component; //todo
            const parentBlock = childrenToReplace.parentNode;
            const child = this.children[componentName];
            if (parentBlock !== null) {
                parentBlock.replaceChild(child.getContent(), childrenToReplace);
            }
        });
    }

    _render() {
        this.element.innerHTML = '';
        const block = this.render();
        console.log('block', block);
        if (typeof block === 'string') {
            const fragment = this.stringToDocumentFragment(block);
            console.log('fragment', fragment.textContent);
            this.element.append(fragment);
        }
        this.replaceChildren();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    render() {
        return false;
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty() {
                throw new Error(ACCESS_ERROR_MESSAGE);
            },
        });
    }

    show() {
        this.getContent()!.style.display = 'block';
    }

    hide() {
        this.getContent()!.style.display = 'none';
    }
}

export default Block;