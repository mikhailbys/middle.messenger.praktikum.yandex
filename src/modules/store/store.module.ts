import EventBus from "../eventBus";

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

    constructor() {
        if (Store.__instance) {
            return Store.__instance;
        }
        this.eventBus = new EventBus();
        this._registerEvents();
        this.pages = [];

        Store.__instance = this;
    }

    _registerEvents() {
        this.eventBus.on(Store.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Store.EVENTS.UPDATE, this.update.bind(this));
    }

    init(pageNames: string[]) {
        pageNames.forEach(name => {
            this.pages.push({ pageName: name, props: {}});
        })
    }

    update(props: any, pageName: string) {
        const currentPage = this.pages.find(page => page.pageName === pageName);
        if (!currentPage) {
            throw Error('Page is not initialized')
        }
        console.log('update:', props);
        // todo update props with router
    }
}

export default Store;