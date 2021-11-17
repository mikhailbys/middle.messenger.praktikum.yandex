import EventBus from "../eventBus";

class Store {
    static EVENTS = {
        INIT: 'init',
        UPDATE: 'update',
    };

    props: {
    };
    eventBus: EventBus;
    pages: any[];
    pageNames: string[]

    constructor(pageNames: string[]) {
        this.eventBus = new EventBus();
        this.pageNames = pageNames;
        this._registerEvents();
    }

    _registerEvents() {
        this.eventBus.on(Store.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(Store.EVENTS.UPDATE, this.update.bind(this));
    }

    init() {
        this.pageNames.forEach(name => {
            this.pages.push({[name]: {}});
        })
    }

    update(props: any) {
        // todo update props with router
    }
}

export default Store;