import TransportAgent from './index';
import fetchMock from 'fetch-mock';

describe('TransportAgent core', () => {

    beforeEach(() => {
        TransportAgent.setBase(); // reset default base hostname
    });

    it('by default uses relative path', async() => {
        fetchMock.getOnce('/test', { isRelative: 'true' });

        const result = await TransportAgent.fetch('GET', { uri: '/test' });
        expect(result).toEqual({ isRelative: 'true' });
    });

    it('allows to set custom base domain path', async() => {
        fetchMock.getOnce('localhost/testCustom', { success: 'true' });
        TransportAgent.setBase('localhost');

        const result = await TransportAgent.fetch('GET', { uri: '/testCustom' });
        expect(result).toEqual({ success: 'true' });
    });


    it('implements fetch abstraction, which can parse JSON result by default', async() => {
        fetchMock.getOnce('/test', { success: 'true' });

        const result = await TransportAgent.fetch('GET', { uri: '/test' });
        expect(result).toEqual({ success: 'true' });
    });

    it('implements fetch abstraction, which can return raw response', async() => {
        fetchMock.getOnce('/test', { success: 'true' });

        const result = await TransportAgent.fetch('GET', { uri: '/test', resultToJson: false });
        const json = await result.json();
        expect(json).toEqual({ success: 'true' });
    });
});