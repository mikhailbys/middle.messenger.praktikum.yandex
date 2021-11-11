type XHROptions = {
    data?: any, // :(
    headers?: {[key: string]:string},
    method: keyof typeof METHODS,
    timeout?: number
}

enum METHODS {
    GET= 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

function queryStringify(data: XMLHttpRequestBodyInit): string {
    let result = '?';
    Object.keys(data).forEach(key => {
        result = typeof data[key] !== 'object' ?
            `${result}${key}=${data[key]}&`
            : `${result}${key}=${data[key].toString()}&`
    });
    return result.slice(0, -1);
}

class HTTPTransport {
    get = (url, options: XHROptions = { method: METHODS.GET }) => {
        return this.request(
            options.data ? `${url}${queryStringify(options.data)}` : url,
            {
                headers: options.headers,
                method: METHODS.GET
            },
            options.timeout);
    };

    put = (url, options: XHROptions = { method: METHODS.PUT }) => {
        return this.request(
            url,
            {
                data: options.data ?? {},
                headers: options.headers,
                method: METHODS.PUT
            },
            options.timeout);
    };

    post = (url, options: XHROptions = { method: METHODS.POST }) => {
        return this.request(
            url,
            {
                data: options.data ?? {},
                headers: options.headers,
                method: METHODS.POST
            },
            options.timeout);
    };

    delete = (url, options: XHROptions = { method: METHODS.DELETE }) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url, options: XHROptions = { method: METHODS.GET }, timeout = 5000) => {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

export default HTTPTransport;