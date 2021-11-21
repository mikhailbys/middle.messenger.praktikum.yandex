import Route from "./route";
import {callPageScript} from "../../utils/callPageScript";
import constants from "../../constants";
import {checkAccess} from "../../utils/access";

const mainPath = constants.routes.main;
const accessErrorPath = constants.routes.accessError;

class Router {

    static __instance: Router;
    routes: Route[] = [];
    history = window.history;
    _currentRoute: Route | null;
    _rootQuery: string;

    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    hasAccess() {
        return checkAccess();
    }

    use(pathname, blockClass) {
        const route = new Route(pathname, blockClass, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        if (this.hasAccess() || route._pathname === mainPath) {
            this._currentRoute = route;
            route.render();
            callPageScript(route._pathname, this);
        } else {
            this._currentRoute = this.routes.find(route =>
                route._pathname === accessErrorPath) ?? null;
            this._currentRoute?.render();
            callPageScript(constants.routes.accessError, this);
        }
    }

    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default Router;