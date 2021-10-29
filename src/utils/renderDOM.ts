import Block from "../modules/Block";

export function render(query: string, block: Block) {
    const root: HTMLElement | null = document.querySelector(query);
    const element = block.getContent();

    if (root && element) {
        // Можно завязаться на реализации вашего класса Block
        root.appendChild(element);
    }
    return root;
}