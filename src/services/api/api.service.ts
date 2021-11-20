type XHROptions = {
    data?: any,
    headers?: {[key: string]:string},
    method: keyof typeof METHODS,
    timeout?: number
    credentials?: string,
    mode?: string,
}

enum METHODS {
    GET= 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

const root_url  = 'https://ya-praktikum.tech/api/v2';

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
    get = (url, options: Omit<XHROptions, 'method'> = {}) => {
        return this.request(url, {
            ...options,
            method: METHODS.GET,
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            }
        }, options.timeout);
    };

    post = (url, options: Omit<XHROptions, 'method'> = {}) => {
        return this.request(url,
            {...options,
                method: METHODS.POST,
                headers: {
                'content-type': 'application/json',
                    Accept: 'application/json'
                }
            }, options.timeout);
    };

    put = (url, options: Omit<XHROptions, 'method'> = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url, options: Omit<XHROptions, 'method'> = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url: string, options: XHROptions, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${root_url}${url}${queryStringify(data)}`
                    : `${root_url}${url}`,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            xhr.withCredentials = true;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export default HTTPTransport;