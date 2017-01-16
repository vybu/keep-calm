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

describe('TransportAgent api calls', () => {
    it('implements fetchPerson', async() => {
        const personId = '123';
        fetchMock.getOnce(`/person/${personId}`, { calledWith: personId });

        const result = await TransportAgent.fetchPerson(personId);
        expect(result).toEqual({ calledWith: personId });
    });

    it('implements fetchFacility', async() => {
        const facilityId = '123';
        fetchMock.getOnce(`/facility/${facilityId}`, { calledWith: facilityId });

        const result = await TransportAgent.fetchFacility(facilityId);
        expect(result).toEqual({ calledWith: facilityId });
    });

    it('implements fetchExposure', async() => {
        const exposureId = '123';
        fetchMock.getOnce(`/exposure/${exposureId}`, { calledWith: exposureId });

        const result = await TransportAgent.fetchExposure(exposureId);
        expect(result).toEqual({ calledWith: exposureId });
    });
});