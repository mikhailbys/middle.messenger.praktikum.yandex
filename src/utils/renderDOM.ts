import Block from '../modules/block';

export function render(query: string, block: Block) {
    const root = document.querySelector(query);
    const element = block.getContent();

    if (root && element) {
        root.append(element);
    }
    return root;
}