import {fetch} from './fetch'
import * as mutationsName from './mutations-name'
export function fetchList({commit, dispatch, state}, {type}) {
    return fetch(type).then(
        items =>
            commit(mutationsName.SET_LIST, {type, items})
    )
}