function toJson(fetchPromise) {
    return fetchPromise.then(r => r.json());
}

/**
 * Abstraction to handle communication
 */
class TransportAgent {
    constructor() {
        this.base = '';
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

    fetchPerson(value) {
        return this.fetch('GET', {uri: `/person/${value}`});
    }

    fetchFacility(value) {
        return this.fetch('GET', {uri: `/facility/${value}`});
    }

    fetchExposure(value) {
        return this.fetch('GET', {uri: `/exposure/${value}`});
    }
}

export default new TransportAgent();