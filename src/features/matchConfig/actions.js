import { action } from '../../actions/creator'

export const ADD_WARRIOR = 'matchConfig/ADD_WARRIOR'
export const REMOVE_WARRIOR = 'matchConfig/REMOVE_WARRIOR'

export const addWarrior = warrior => action(ADD_WARRIOR, { warrior })
export const removeWarrior = id => action(REMOVE_WARRIOR, { id })
