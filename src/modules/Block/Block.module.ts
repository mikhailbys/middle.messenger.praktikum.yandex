import EventBus from "../EventBus";

interface Meta {
    tagName: string;
    props: Props;
}

interface Props {
    className?: string,
    type?: string,
    label?: string,
    onClick?: () => void
}

class Block {

    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };

    _element: HTMLElement | null = null;
    _meta: Meta | null = null;

    props: any;
    private eventBus: () => EventBus;

    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;


        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        const { tagName, props } = this._meta!;
        this._element = this._createDocumentElement(tagName);
        props.className && this._element?.classList.add(props.className);
        if (props.label) {
            // @ts-ignore
            this._element?.innerHTML = props.label;
        }
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        response && this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps;//todo
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        const oldProps = this.props;
        Object.assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        // Удалить старые события через removeEventListener
        // Навесить новые события через addEventListener
        this.props.onClick && this._element?.addEventListener('click', this.props.onClick)
    }

    render(): string {
        return ''
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}

export default Block;