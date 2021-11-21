export const triggerValidateError = (element: HTMLFormElement | null, selector: string) => {
    element?.focus();
    element?.classList.add('input-error') ;
    document.querySelector(selector)?.classList.add('show-error') ;
}