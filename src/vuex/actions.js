import { fetch } from './fetch'
import * as mutations from './mutations-types'
export function fetchList ({ commit, dispatch, state }, { type }) {
    return fetch().then(items => commit(mutations.FUN_SET_LIST, { type, items }))
}