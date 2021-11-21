import EventBus from "../eventBus";
import Route from "../router/route";

type Props = {
    type: 'value' | 'innerText',
    props: any
}

type StorePage = {
    pageName: string,
    props: {}
}

class Store {
    static EVENTS = {
        INIT: 'init',
        UPDATE: 'update',
    };

    static __instance: Store;
    props: {
    };
    eventBus: EventBus;
    pages: StorePage[];
    routes: Route[];

    constructor() {
        if (Store.__instance) {
            return Store.__instance;
        }
        this.eventBus = new EventBus();
        this._registerEvents();
        this.pages = [];
        this.routes = [];

        Store.__instance = this;
    }

    _registerEvents() {
        this.eventBus.on(Store.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Store.EVENTS.UPDATE, this.update.bind(this));
    }

    init(pageNames: string[], routes: Route[]) {
        pageNames.forEach(name => {
            this.pages.push({ pageName: name, props: {}});
        })
        this.routes = routes;
    }

    update(props: Props, pageName: string) {
        const currentPage = this.pages.find(page => page.pageName === pageName);
        if (!currentPage) {
            throw Error('Page is not initialized');
        }
        // todo перезаписывать в существующий пейдж новые пропы, иначе дублируются пейджы

        const routeToUpdate = this.routes.find(route => route._pathname === currentPage.pageName);
        if (routeToUpdate) {
            currentPage.props = props;
            routeToUpdate.render(props)
        } else {
            throw Error('Route is not found');
        }
    }
}

export default Store;