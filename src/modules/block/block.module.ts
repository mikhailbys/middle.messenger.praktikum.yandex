import EventBus from '../eventBus';

interface Meta {
    tagName: string;
    props: Props;
}

interface Props {
    templateBase?: boolean,
    attributes?: { string: string },
    innerText?: string,
    value?: string
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
    props: Props;
    eventBus: EventBus;
    children: Record<string, Block>;

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

    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName, this.props.attributes);
    }

    _createDocumentElement(tagName: string, attributes = {}) {
        const element = document.createElement(tagName);
        this._setAttributes(element, attributes);
        return element;
    }

    _setAttributes(element: HTMLElement, attributes: Record<string, string> = {}) {
        Object.keys(attributes).forEach((attr: string) => {
            element.setAttribute(attr, attributes[attr]);
        });
    }

    _componentDidMount() {
        this.componentDidMount(this.props);
    }

    // Переопределяемый
    componentDidMount(_oldProps: any): void {}

    _render() {
        this._element.innerHTML = '';
        const html = this.render();
        const dom = this._htmlToDocumentFragment(html);
        this._replaceChildren(dom);

        this.props.templateBase ?
            this._element.append(dom) :
            this._element.innerText = dom.textContent ?? '';

        //this._element.append(dom);

        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _updateResources() {
        const { value } = this.props;
        if (value === '' || value) {
            //@ts-ignore
            this._element.value = value;
        }
    }

    _componentDidUpdate(newProps: any, oldProps: any) {
        this.componentDidUpdate(newProps, oldProps);
        this._updateResources();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidUpdate(_newProps: any, _oldProps: any): void | boolean {
        return true;
    }

    setProps = (nextProps?: {[block: string]: string}) => {
        if (nextProps) {
            Object.assign(this.props, nextProps);
            this.eventBus.emit(Block.EVENTS.FLOW_CDU);
        }
    };

    _htmlToDocumentFragment(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    _replaceChildren(dom) {
        const childrenToReplace = dom.querySelectorAll("[data-component]");
        for (const childToReplace of childrenToReplace) {
            const componentName = childToReplace.dataset.component;
            const parentBlock = childToReplace.parentElement;
            const child = this.children[componentName];
            parentBlock.replaceChild(child.getContent(), childToReplace);
        }
    }

    render() {
        return '';
    }

    getContent() {
        return this._element;
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