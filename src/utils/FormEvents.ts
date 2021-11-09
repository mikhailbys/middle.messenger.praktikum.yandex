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
