import { takeLatest, put, apply } from 'redux-saga/effects';
import { successAlphaCalculations, failAlphaCalculations } from '../actions';
import { REQUEST_ALPHA_CALCULATIONS } from '../constants';
import TransportAgent from '../../../common/transport';
import watchAlphaCalculationRequests, { fetchAlphaCalculation } from '../sagas';

describe('AlphaCalculator saga', () => {

    it('observer correct action', () => {
        const generator = watchAlphaCalculationRequests();
        expect(generator.next().value).toEqual(takeLatest(REQUEST_ALPHA_CALCULATIONS, fetchAlphaCalculation));

    });

    it('calls api chain in correct order', () => {
        const alphaInputValue = 'Test';
        const [val1, val2, val3, val4, val5] = ['1', '2', '3', '4', '5'];

        const generator = fetchAlphaCalculation();

        generator.next(); // select alphaInputValue

        expect(generator.next({ alphaInputValue }).value)
            .toEqual(apply(TransportAgent, TransportAgent.fetchPerson, [alphaInputValue]));

        expect(generator.next({ val1, val2 }).value)
            .toEqual([
                apply(TransportAgent, TransportAgent.fetchFacility, [val1]),
                apply(TransportAgent, TransportAgent.fetchExposure, [val2])
            ]);

        expect(generator.next([{ val3, val4 }, { val5 }]).value)
            .toEqual(put(successAlphaCalculations(parseFloat(val3) * parseFloat(val4))));
    });

    it('abandons api calls chain if one of 1st api calls fail', () => {
        const alphaInputValue = 'Test';

        const generator = fetchAlphaCalculation();

        generator.next(); // select alphaInputValue

        expect(generator.next({ alphaInputValue }).value)
            .toEqual(apply(TransportAgent, TransportAgent.fetchPerson, [alphaInputValue]));

        expect(generator.throw(new Error('Request failed')).value)
            .toEqual(put(failAlphaCalculations()));

        expect(generator.next()).toEqual({ done: true, value: undefined });
    });

    it('abandons api calls chain if one of 2nd or 3rd api calls fail', () => {
        const alphaInputValue = 'Test';
        const [val1, val2] = ['1', '2'];

        const generator = fetchAlphaCalculation();

        generator.next(); // select alphaInputValue

        expect(generator.next({ alphaInputValue }).value)
            .toEqual(apply(TransportAgent, TransportAgent.fetchPerson, [alphaInputValue]));

        expect(generator.next({ val1, val2 }).value)
            .toEqual([
                apply(TransportAgent, TransportAgent.fetchFacility, [val1]),
                apply(TransportAgent, TransportAgent.fetchExposure, [val2])
            ]);

        expect(generator.throw(new Error('Request failed')).value)
            .toEqual(put(failAlphaCalculations()));

        expect(generator.next()).toEqual({ done: true, value: undefined });
    });
});