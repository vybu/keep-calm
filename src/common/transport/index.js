function toJson(fetchPromise) {
    return fetchPromise.then(r => r.status !== 200 ? { isSuccessfull: false } : r.json());
}

/**
 * Abstraction to handle communication
 */
class TransportAgent {
    constructor(base = '') {
        this.base = base;
    }

    setBase(base = '') {
        this.base = base;
    }

    fetch(method, {uri, body, resultToJson = true}) {

        const conf = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        if (body) {
            conf.body = JSON.stringify(body);
        }

        const f = fetch(`${this.base}${uri}`, conf);

        return resultToJson ? toJson(f) : f;
    }

    setDataById(id, data) {
        return this.fetch('POST', {uri: '', body: {id, data}});
    }

    getDataById(id) {
        return this.fetch('GET', {uri: `?id=${id}`});
    }
}

export default new TransportAgent();