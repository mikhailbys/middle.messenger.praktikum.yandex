/**
 * Устанавливает колбэк-очистку ошибок на событие фокуса в инпуте форм
 * @param element - поле формы (инпут)
 * @param errorSelectors - селекторы (id) span-ов с текстовками ошибок
 */
export const addFocusEventOnInput = (element: Element, errorSelectors: string[]) => {
    element.addEventListener('focus', () => {
        element.classList.remove('input-error');
        errorSelectors.forEach(selector => {
            document.querySelector(`#${selector}`)?.classList.remove('show-error');
        })
    })
}

/**
 * Устанавливает колбэк-очистку ошибок на событие фокуса в инпуте форм
 * @param element - поле формы (инпут)
 * @param errorSelectors - селекторы (id) span-ов с текстовками ошибок
 * @param selectorsToRemove
 */
export const addFocusEventOnInputBySelectors = (
    element: Element,
    errorSelectors: string[],
    selectorsToRemove: string[]
) => {
    element.addEventListener('focus', () => {
        element.classList.remove(selectorsToRemove[0]);
        errorSelectors.forEach(selector => {
            document.querySelector(`#${selector}`)?.classList.remove(selectorsToRemove[1]);
        })
    })
}

export const triggerValidateErrorBySelectors = (
    element: HTMLFormElement | null,
    selector: string,
    selectorsToAdd: string[]
) => {
    element?.focus();
    element?.classList.add(selectorsToAdd[0]) ;
    document.querySelector(selector)?.classList.add(selectorsToAdd[1]) ;
}