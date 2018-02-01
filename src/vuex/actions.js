import {fetch,search} from './fetch'
import * as mutationsName from './mutations-name'

export function fetchList({commit, dispatch, state}, {type}) {
    return fetch(type).then(
        items =>
            commit(mutationsName.SET_LIST, {type, items})
    )
}



export function searchList({commit, dispatch, state}, {keyWord}) {
    return search(keyWord).then(
        items =>
            commit(mutationsName.SET_SEARCH_RESULT, {keyWord, items})
    )
}