import {assert} from "chai";
import Router from "./router.module";
import Block from "../block";

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

describe("Router usage suite", () => {
    it('Must be defined', function () {
        const router = new Router('app');
        assert.exists(router);
    });
    it('Router route adding', function () {
        const router = new Router('app');
        router.use('/err', () => new Block('div'));
        assert.lengthOf(router.routes, 1, 'Router get one route');
        assert.equal(router.routes[0]._pathname, '/err', 'Route pathname is not defined');
    });
    it('Router instance has no routes', function () {
        const router = new Router('app');
        assert.isArray(router.routes, 'Routes is an array');
        assert.lengthOf(router.routes, 0, 'There is no routes');
    });
});