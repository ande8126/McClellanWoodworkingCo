import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchInquiries() {
    try {
        const response = yield axios.get('/api/inquiries');
        //send over to reducer
        yield put( { type: 'SET_INQUIRIES', payload: response.data } );
    } catch ( error ) {
        console.log( 'inquiries GET failed:', error );
    }
}

function* inquiriesSaga() {
    yield takeLatest( 'FETCH_INQUIRIES', fetchInquiries );
}

export default inquiriesSaga;