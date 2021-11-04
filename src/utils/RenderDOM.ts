import Block from '../modules/block';

export function render(query: string, block: Block) {
    const root: HTMLElement | null = document.querySelector(query);
    const element = block.getContent();

    if (root && element) {
        // Можно завязаться на реализации вашего класса block
        root.appendChild(element);
    }
    return root;
}