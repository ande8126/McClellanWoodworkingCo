import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sendInquiry( action ) {
  try {
    yield axios.post('/api/inquiries', action.payload );
    console.log( 'in sendInquiry saga' );
    // yield put({ type: 'FETCH_INQUIRIES } ); // not here yet
  } catch (error) {
    console.log('new inquiry POST failed', error);
  }
}

function* sendInquirySaga() {
  yield takeLatest('SEND_INQUIRY', sendRequest);
}

export default sendInquirySaga;