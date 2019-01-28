import { action } from '../../actions/creator'

export const ADD_WARRIOR = 'matchConfig/ADD_WARRIOR'
export const REMOVE_WARRIOR = 'matchConfig/REMOVE_WARRIOR'
export const SELECT_WARRIOR = 'matchConfig/SELECT_WARRIOR'

export const addWarrior = warrior => action(ADD_WARRIOR, { warrior })
export const removeWarrior = index => action(REMOVE_WARRIOR, { index })
export const selectWarrior = (index, warrior) => action(SELECT_WARRIOR, { index, warrior })
