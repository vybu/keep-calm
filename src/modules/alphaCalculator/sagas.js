import { takeLatest, put, select, apply } from 'redux-saga/effects';
import { successAlphaCalculations, failAlphaCalculations } from './actions';
import { REQUEST_ALPHA_CALCULATIONS } from './constants';
import { getAll } from './selectors';
import { calculateAlpha } from './business';
import TransportAgent from '../../common/transport';


export function* fetchAlphaCalculation() {
    const { alphaInputValue } = yield select(getAll);
    try {
        const { val1, val2 } = yield apply(TransportAgent, TransportAgent.fetchPerson, [alphaInputValue]);
        const [{ val3, val4 }] = yield [
            apply(TransportAgent, TransportAgent.fetchFacility, [val1]),
            apply(TransportAgent, TransportAgent.fetchExposure, [val2])
        ];

        yield put(successAlphaCalculations(calculateAlpha(val3, val4)));
    } catch (e) {
        yield put(failAlphaCalculations());
    }
}


export default function* watchAlphaCalculationRequests() {
    yield takeLatest(REQUEST_ALPHA_CALCULATIONS, fetchAlphaCalculation);
}