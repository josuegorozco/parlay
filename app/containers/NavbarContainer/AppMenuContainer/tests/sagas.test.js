import expect from 'expect';
import { call, put, take } from 'redux-saga/effects';
import { REQUEST_APP_MENU } from '../constants';
import { fetchAppMenu, fetchAppMenuFromServer, fetchAppMenuSaga } from '../sagas';
import { requestAppMenuFailed, requestAppMenuSucceeded } from '../actions';
import response from '../data/menu';

/*
|--------------------------------------------------------------------------
| Test sagas
|--------------------------------------------------------------------------
|
| Define tests for sagas.
|
*/

describe('fetchAppMenuSaga', () => {
    const generator = fetchAppMenuSaga();

    it('should watch for REQUEST_APP_MENU', () => {
        const takeDescriptor = generator.next().value;

        expect(takeDescriptor).toEqual(take(REQUEST_APP_MENU));
    });
});

describe('fetchAppMenu', () => {
    let generator;

    beforeEach(() => {
        generator = fetchAppMenu();

        expect(generator.next().value).toEqual(call(fetchAppMenuFromServer));
    });

    it('should dispatch requestAppMenuSucceeded if it requests the data successfully', () => {
        const putDescriptor = generator.next(response).value;

        expect(putDescriptor).toEqual(put(requestAppMenuSucceeded(response)));
    });

    it('should call the requestAppFailed action if response errors', () => {
        const e = new Error('Internal Error');
        const putDescriptor = generator.throw(e).value;

        expect(putDescriptor).toEqual(put(requestAppMenuFailed(e.message)));
    });
});
