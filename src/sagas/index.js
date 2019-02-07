import { all } from 'redux-saga/effects'

import { parserWatchers } from '../features/parser/sagas'
import { simulatorWatchers } from '../features/simulator/sagas'
import { signupWatchers } from '../features/signup/sagas'
import { feedbackWatchers } from '../features/feedback/sagas'
import { matchWatchers } from '../features/matchConfig/sagas'

export default function* rootSaga() {
  yield all([
    ...parserWatchers,
    ...simulatorWatchers,
    ...signupWatchers,
    ...feedbackWatchers,
    ...matchWatchers
  ])
}
