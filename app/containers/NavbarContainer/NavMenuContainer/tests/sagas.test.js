import expect from 'expect';
import { call, put, take } from 'redux-saga/effects';
import { REQUEST_NAV_MENU } from '../constants';
import { fetchNavMenu, fetchNavMenuFromServer, fetchNavMenuSaga } from '../sagas';
import { requestNavMenuFailed, requestNavMenuSucceeded } from '../actions';
import response from '../data/menu';

/*
|--------------------------------------------------------------------------
| Test sagas
|--------------------------------------------------------------------------
|
| Define tests for sagas.
|
*/

describe('fetchNavMenuSaga', () => {
    const generator = fetchNavMenuSaga();

    it('should watch for REQUEST_NAV_MENU', () => {
        const takeDescriptor = generator.next().value;

        expect(takeDescriptor).toEqual(take(REQUEST_NAV_MENU));
    });
});

describe('fetchNavMenu', () => {
    let generator;

    beforeEach(() => {
        generator = fetchNavMenu();

        expect(generator.next().value).toEqual(call(fetchNavMenuFromServer));
    });

    it('should dispatch requestNavMenuSucceeded if it requests the data successfully', () => {
        const putDescriptor = generator.next(response).value;

        expect(putDescriptor).toEqual(put(requestNavMenuSucceeded(response)));
    });

    it('should call the requestAppFailed action if response errors', () => {
        const e = new Error('Internal Error');
        const putDescriptor = generator.throw(e).value;

        expect(putDescriptor).toEqual(put(requestNavMenuFailed(e.message)));
    });
});
