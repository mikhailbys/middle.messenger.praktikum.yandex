import { expect } from 'chai';
import 'mocha';
import { JSDOM } from 'jsdom';
import Block from "../../modules/block";

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

function createElement() {
    return new Block('div');
}

class TestBlock extends Block {
    render() {
        return 'Test';
    }
}

const testBlock = new TestBlock('div', {
    attributes: {class: 'test-class'},
    templateBase: true
});

const dom = new JSDOM('<!DOCTYPE html><div class="root"></div>');
(global as NodeJS.Global).document = dom.window.document;

describe('Block usage suite', () => {
    it('Block can be created', () => {
        const el = createElement();
        expect(el).to.not.be.null;
        expect(el).to.be.instanceof(Block);
    });
    it('Block render default return empty string', () => {
        const element = createElement();
        expect(element.render()).to.eq('');
    });
    it('Block renders with props', () => {
        const element = document.createElement('div');
        element.appendChild(testBlock.getContent());
        expect(element.innerHTML).to.eq('<div class="test-class">Test</div>');
    });
});