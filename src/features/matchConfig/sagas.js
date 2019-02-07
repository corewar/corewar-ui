import { call, put, select, takeLatest } from 'redux-saga/effects'
import { corewar } from 'corewar'

import { MATCH_REQUESTED } from './actions'

import { getMatchState } from './reducer'

// sagas
export function* startMatchSaga() {
  const { selectedWarriors } = yield select(getMatchState)

  console.log('selectedWarriors', selectedWarriors)
  //console.log('matchConfig', matchConfig)
  //yield put({ type: PAUSE })
}

// watchers
export const matchWatchers = [takeLatest(MATCH_REQUESTED, startMatchSaga)]
